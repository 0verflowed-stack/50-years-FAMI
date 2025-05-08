#!/usr/bin/env python3
"""
Generate a JavaScript `aspectMap` object mapping image identifiers to CSS aspect-ratio values.

Usage:
    python aspect_ratio_generator.py /path/to/image/folder

Ensure you have Pillow installed:
    pip install pillow
"""
import os
import sys
from PIL import Image
from math import gcd


def get_aspect_ratio(image_path):
    """Return the reduced width and height as a tuple."""
    with Image.open(image_path) as img:
        width, height = img.size
    if width == 0 or height == 0:
        return None
    common = gcd(width, height)
    return width // common, height // common


def main(folder_path):
    """Scan folder and output a JS object literal for aspectMap."""
    # Supported image extensions
    exts = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'}
    entries = []

    # Iterate files in sorted order for consistency
    for filename in sorted(os.listdir(folder_path)):
        name, ext = os.path.splitext(filename)
        if ext.lower() in exts:
            ratio = get_aspect_ratio(os.path.join(folder_path, filename))
            if ratio:
                w, h = ratio
                # Use filename (without extension) as key, sanitize to JS identifier if needed
                key = name.strip().replace(' ', '_')
                entries.append((key, f"{w} / {h}"))

    # Print JS object
    print("const aspectMap = {")
    for key, ratio in entries:
        print(f"    '{key}': '{ratio}',")
    print("};")


if __name__ == '__main__':
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} [image_folder]")
        sys.exit(1)
    folder = sys.argv[1]
    if not os.path.isdir(folder):
        print(f"Error: '{folder}' is not a valid directory.")
        sys.exit(1)
    main(folder)
