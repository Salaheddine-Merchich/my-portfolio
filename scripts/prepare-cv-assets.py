#!/usr/bin/env python3
"""Fix broken Word-exported FR CV PDF and generate section preview images.

Requires PyMuPDF: pip install pymupdf

Keep public/cv/resume-fr-source.pdf as the Word-export master (readable in Word).
This script rasterizes it into resume-fr.pdf so Chrome and other viewers display text correctly.
"""
import sys
from pathlib import Path

try:
    import fitz
except ImportError:
    print("Install PyMuPDF: pip install pymupdf")
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
CV_DIR = ROOT / "public" / "cv"
SCALE_PREVIEW = 1.25
SCALE_PDF = 1.5
FR_SOURCE = CV_DIR / "resume-fr-source.pdf"


def rasterize_pdf(src_path: Path, dst_path: Path, scale: float) -> None:
    src = fitz.open(str(src_path))
    out = fitz.open()
    for page in src:
        pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
        rect = fitz.Rect(0, 0, pix.width, pix.height)
        new_page = out.new_page(width=rect.width, height=rect.height)
        new_page.insert_image(rect, pixmap=pix)
    tmp = dst_path.with_suffix(".tmp.pdf")
    out.save(str(tmp), deflate=True, garbage=4)
    out.close()
    src.close()
    tmp.replace(dst_path)


def make_preview(src_path: Path, dst_path: Path, scale: float) -> None:
    doc = fitz.open(str(src_path))
    pix = doc[0].get_pixmap(matrix=fitz.Matrix(scale, scale), alpha=False)
    if dst_path.suffix.lower() in {".jpg", ".jpeg"}:
        pix.save(str(dst_path), jpg_quality=78)
    else:
        pix.save(str(dst_path))
    doc.close()


def main() -> None:
    fr_out = CV_DIR / "resume-fr.pdf"
    en_src = CV_DIR / "resume-en.pdf"

    if not FR_SOURCE.exists():
        print(f"Missing {FR_SOURCE}")
        sys.exit(1)

    rasterize_pdf(FR_SOURCE, fr_out, SCALE_PDF)
    print(f"Fixed {fr_out}")

    make_preview(FR_SOURCE, CV_DIR / "resume-fr-preview.jpg", SCALE_PREVIEW)
    print("Wrote resume-fr-preview.jpg")

    if en_src.exists():
        make_preview(en_src, CV_DIR / "resume-en-preview.jpg", SCALE_PREVIEW)
        print("Wrote resume-en-preview.jpg")


if __name__ == "__main__":
    main()
