#!/usr/bin/env python3
"""Fix broken Word-exported CV PDFs and generate section preview images.

Requires: pip install pymupdf pillow

Keep public/cv/resume-*-source.pdf as Word-export masters.
Rasterizes into image PDFs with copied hyperlinks and PNG previews for the site.
"""
import sys
from pathlib import Path

try:
    import fitz
    from PIL import Image
except ImportError:
    print("Install dependencies: pip install pymupdf pillow")
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
CV_DIR = ROOT / "public" / "cv"
SCALE_PREVIEW = 1.25
SCALE_FULL = 2.0
ASSET_VERSION = "5"
FR_SOURCE = CV_DIR / "resume-fr-source.pdf"
EN_SOURCE = CV_DIR / "resume-en-source.pdf"


def pixmap_to_image(pix: fitz.Pixmap) -> Image.Image:
    return Image.frombytes("RGB", [pix.width, pix.height], pix.samples)


def render_page_image(src_path: Path, scale: float) -> Image.Image:
    doc = fitz.open(str(src_path))
    pix = doc[0].get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    doc.close()
    return pixmap_to_image(pix)


def save_png(img: Image.Image, dst_path: Path) -> None:
    img.save(str(dst_path), "PNG", optimize=True)


def save_linked_image_pdf(source: Path, dst_path: Path, scale: float) -> None:
    src_doc = fitz.open(str(source))
    src_page = src_doc[0]
    pix = src_page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    rect = fitz.Rect(0, 0, pix.width, pix.height)

    out = fitz.open()
    page = out.new_page(width=rect.width, height=rect.height)
    page.insert_image(rect, pixmap=pix)

    src_rect = src_page.rect
    sx = pix.width / src_rect.width
    sy = pix.height / src_rect.height
    link_count = 0
    for link in src_page.get_links():
        uri = link.get("uri")
        if not uri:
            continue
        r = link["from"]
        new_rect = fitz.Rect(r.x0 * sx, r.y0 * sy, r.x1 * sx, r.y1 * sy)
        page.insert_link(
            {"kind": fitz.LINK_URI, "from": new_rect, "uri": uri}
        )
        link_count += 1

    tmp = dst_path.with_suffix(".tmp.pdf")
    out.save(str(tmp), deflate=True, garbage=4)
    out.close()
    src_doc.close()
    tmp.replace(dst_path)
    print(f"  {dst_path.name}: {link_count} links embedded")


def write_viewer_html(dst_path: Path, pdf_name: str, title: str) -> None:
    pdf_src = f"{pdf_name}?v={ASSET_VERSION}"
    dst_path.write_text(
        f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <style>
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      background: #111827;
      font-family: system-ui, sans-serif;
    }}
    main {{
      max-width: 960px;
      margin: 0 auto;
      padding: 16px;
    }}
    .cv-frame {{
      display: block;
      width: 100%;
      height: min(90vh, 1400px);
      border: 0;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
    }}
    a.back {{
      display: inline-block;
      margin-bottom: 12px;
      color: #93c5fd;
      text-decoration: none;
      font-weight: 600;
    }}
    a.back:hover {{ text-decoration: underline; }}
  </style>
</head>
<body>
  <main>
    <a class="back" href="/#resume">← Back to portfolio</a>
    <iframe
      src="{pdf_src}"
      title="{title}"
      class="cv-frame"
    ></iframe>
  </main>
</body>
</html>
""",
        encoding="utf-8",
    )


def process_lang(prefix: str, source: Path, view_title: str) -> None:
    if not source.exists():
        print(f"Missing {source}")
        sys.exit(1)

    save_png(render_page_image(source, SCALE_PREVIEW), CV_DIR / f"resume-{prefix}-preview.png")
    save_png(render_page_image(source, SCALE_FULL), CV_DIR / f"resume-{prefix}-full.png")
    save_linked_image_pdf(source, CV_DIR / f"resume-{prefix}.pdf", SCALE_FULL)
    write_viewer_html(
        CV_DIR / f"resume-{prefix}-view.html",
        f"resume-{prefix}.pdf",
        view_title,
    )
    print(
        f"Wrote resume-{prefix}.pdf, resume-{prefix}-preview.png, "
        f"resume-{prefix}-full.png, resume-{prefix}-view.html"
    )


def main() -> None:
    process_lang("fr", FR_SOURCE, "CV — Salaheddine Merchich (Français)")
    process_lang("en", EN_SOURCE, "Resume — Salaheddine Merchich (English)")


if __name__ == "__main__":
    main()
