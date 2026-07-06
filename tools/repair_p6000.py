from pathlib import Path
import base64
import re

root = Path(__file__).resolve().parents[1]
photo_dir = root / "assets" / "p6000-real"
stems = [
    "step-01-open-cover",
    "step-02-remove-roll",
    "step-03-core-size",
    "step-04-attach-adapters",
    "step-05-seat-roll",
    "step-06-feed-edge",
    "step-07-align-close",
    "step-08-load-confirm",
]

print("Extracting the eight full real-photo JPEGs...")
for stem in stems:
    svg_path = photo_dir / f"{stem}.svg"
    jpg_path = photo_dir / f"{stem}.jpg"
    if not svg_path.exists():
        raise RuntimeError(f"Missing source: {svg_path}")
    svg = svg_path.read_text(encoding="utf-8")
    marker = "base64,"
    start = svg.find(marker)
    if start < 0:
        raise RuntimeError(f"No embedded image in {svg_path}")
    start += len(marker)
    end_candidates = [p for p in (svg.find('"', start), svg.find("'", start)) if p >= 0]
    if not end_candidates:
        raise RuntimeError(f"No end quote after embedded image in {svg_path}")
    end = min(end_candidates)
    encoded = "".join(svg[start:end].split())
    image_bytes = base64.b64decode(encoded)
    if not image_bytes.startswith(b"\xff\xd8\xff") or len(image_bytes) < 40000:
        raise RuntimeError(f"Invalid JPEG extracted from {svg_path}: {len(image_bytes)} bytes")
    jpg_path.write_bytes(image_bytes)
    svg_path.unlink()
    print(f"  {jpg_path.relative_to(root)} — {len(image_bytes):,} bytes")

data_path = root / "data.js"
data = data_path.read_text(encoding="utf-8")
for stem in stems:
    old = f"assets/p6000-real/{stem}.svg"
    new = f"assets/p6000-real/{stem}.jpg"
    if data.count(old) != 1:
        raise RuntimeError(f"Expected one data.js reference to {old}")
    data = data.replace(old, new)
data_path.write_text(data, encoding="utf-8")

app_path = root / "app.js"
app = app_path.read_text(encoding="utf-8")
app = app.replace("\n  hydrateGuidePhotos();", "", 1)
start = app.find("\nasync function hydrateGuidePhotos()")
end = app.find("\nfunction label", start)
if start < 0 or end < 0:
    raise RuntimeError("Could not locate hydrateGuidePhotos in app.js")
app = app[:start] + "\n" + app[end:]
app = re.sub(
    r'\n\s*const embeddedPhoto = step\.image\.toLowerCase\(\)\.endsWith\("\.svg"\).*?;\n',
    "\n",
    app,
    count=1,
)
app = app.replace("${embeddedPhoto}", "")
if "hydrateGuidePhotos" in app or "data-embedded-photo" in app or "${embeddedPhoto}" in app:
    raise RuntimeError("The obsolete embedded-photo renderer remains in app.js")
app_path.write_text(app, encoding="utf-8")

css_path = root / "guide.css"
css = css_path.read_text(encoding="utf-8")
css = re.sub(r'\.visual-step-media:before\{[^}]*\}', "", css)
css = re.sub(r'\.visual-step-media img\.photo-ready\{[^}]*\}', "", css)
css = re.sub(r'\.photo-fallback(?: span| strong| small)?\{[^}]*\}', "", css)
css = re.sub(r'@keyframes photoFade\{from\{[^}]*\}to\{[^}]*\}\}', "", css)
css = re.sub(r'@media\(prefers-reduced-motion:reduce\)\{\.visual-step-media img\.photo-ready\{[^}]*\}\}', "", css)
css = re.sub(
    r'\.visual-step-media img\{[^}]*\}',
    ".visual-step-media img{position:relative;z-index:1;display:block;width:100%;height:100%;max-width:900px;object-fit:contain;background:#f8f6f3;border-radius:10px;box-shadow:0 3px 14px rgba(49,43,38,.08);image-rendering:auto}",
    css,
    count=1,
)
css = css.replace("background:linear-gradient(145deg,#ece8e3,#f7f4f0)", "background:#f3f0ec")
css_path.write_text(css, encoding="utf-8")

index_path = root / "index.html"
index = index_path.read_text(encoding="utf-8")
index = index.replace("20260705-photo-fix", "20260705-real-jpg")
index_path.write_text(index, encoding="utf-8")

final_data = data_path.read_text(encoding="utf-8")
for stem in stems:
    jpg_path = photo_dir / f"{stem}.jpg"
    if not jpg_path.exists() or jpg_path.stat().st_size <= 40000:
        raise RuntimeError(f"Final JPEG validation failed: {jpg_path}")
    if final_data.count(f"assets/p6000-real/{stem}.jpg") != 1:
        raise RuntimeError(f"Final image reference validation failed: {stem}")
if list(photo_dir.glob("*.svg")):
    raise RuntimeError("Obsolete SVG assets remain")

print("Validated: eight normal JPEG files, eight direct references, no SVG renderer.")
