#!/usr/bin/env python3
"""Fix broken Word-exported FR CV PDF and generate section preview images.

Requires: pip install pymupdf pillow

Keep public/cv/resume-fr-source.pdf as the Word-export master (readable in Word).
Rasterizes it into resume-fr.pdf (image-only PDF) and JPG previews for the site.
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
SCALE_PDF = 2.0
FR_SOURCE = CV_DIR / "resume-fr-source.pdf"


def pixmap_to_image(pix: fitz.Pixmap) -> Image.Image:
    return Image.frombytes("RGB", [pix.width, pix.height], pix.samples)


def render_page(src_path: Path, scale: float) -> Image.Image:
    doc = fitz.open(str(src_path))
    pix = doc[0].get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    doc.close()
    return pixmap_to_image(pix)


def save_jpeg(img: Image.Image, dst_path: Path, quality: int = 82) -> None:
    img.save(str(dst_path), "JPEG", quality=quality, optimize=True)


def save_image_pdf(img: Image.Image, dst_path: Path) -> None:
    tmp = dst_path.with_suffix(".tmp.pdf")
    img.save(str(tmp), "PDF", resolution=200.0)
    tmp.replace(dst_path)


def write_viewer_html(dst_path: Path, image_name: str, title: str) -> None:
    dst_path.write_text(
        f"""<!DOCTYPE html>
<html lang="fr">
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
    <img src="{image_name}" alt="{title}" />
  </main>
</body>
</html>
""",
        encoding="utf-8",
    )


def main() -> None:
    en_src = CV_DIR / "resume-en.pdf"

    if not FR_SOURCE.exists():
        print(f"Missing {FR_SOURCE}")
        sys.exit(1)

    fr_full = render_page(FR_SOURCE, SCALE_FULL)
    save_jpeg(fr_full, CV_DIR / "resume-fr-full.jpg", quality=88)
    save_image_pdf(fr_full, CV_DIR / "resume-fr.pdf")
    save_jpeg(render_page(FR_SOURCE, SCALE_PREVIEW), CV_DIR / "resume-fr-preview.jpg")
    write_viewer_html(
        CV_DIR / "resume-fr-view.html",
        "resume-fr-full.jpg",
        "CV — Salaheddine Merchich (Français)",
    )
    print("Wrote resume-fr.pdf, resume-fr-preview.jpg, resume-fr-full.jpg, resume-fr-view.html")

    if en_src.exists():
        save_jpeg(render_page(en_src, SCALE_PREVIEW), CV_DIR / "resume-en-preview.jpg")
        en_full = render_page(en_src, SCALE_FULL)
        save_jpeg(en_full, CV_DIR / "resume-en-full.jpg", quality=88)
        write_viewer_html(
            CV_DIR / "resume-en-view.html",
            "resume-en-full.jpg",
            "Resume — Salaheddine Merchich (English)",
        )
        print("Wrote resume-en-preview.jpg, resume-en-full.jpg, resume-en-view.html")


if __name__ == "__main__":
    main()
