#!/usr/bin/env python3
"""Fix broken Word-exported CV PDFs and generate section preview images.

Requires: pip install pymupdf pillow

Keep public/cv/resume-*-source.pdf as Word-export masters.
Rasterizes into image-only PDFs and PNG previews for the site.
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
ASSET_VERSION = "4"
FR_SOURCE = CV_DIR / "resume-fr-source.pdf"
EN_SOURCE = CV_DIR / "resume-en-source.pdf"


def pixmap_to_image(pix: fitz.Pixmap) -> Image.Image:
    return Image.frombytes("RGB", [pix.width, pix.height], pix.samples)


def render_page(src_path: Path, scale: float) -> Image.Image:
    doc = fitz.open(str(src_path))
    pix = doc[0].get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    doc.close()
    return pixmap_to_image(pix)


def save_png(img: Image.Image, dst_path: Path) -> None:
    img.save(str(dst_path), "PNG", optimize=True)


def save_image_pdf(img: Image.Image, dst_path: Path) -> None:
    tmp = dst_path.with_suffix(".tmp.pdf")
    img.save(str(tmp), "PDF", resolution=200.0)
    tmp.replace(dst_path)


def write_viewer_html(dst_path: Path, image_name: str, title: str) -> None:
    img_src = f"{image_name}?v={ASSET_VERSION}"
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
    img {{
      display: block;
      width: 100%;
      height: auto;
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
    <img src="{img_src}" alt="{title}" />
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

    full_img = render_page(source, SCALE_FULL)
    preview_img = render_page(source, SCALE_PREVIEW)

    save_png(preview_img, CV_DIR / f"resume-{prefix}-preview.png")
    save_png(full_img, CV_DIR / f"resume-{prefix}-full.png")
    save_image_pdf(full_img, CV_DIR / f"resume-{prefix}.pdf")
    write_viewer_html(
        CV_DIR / f"resume-{prefix}-view.html",
        f"resume-{prefix}-full.png",
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
