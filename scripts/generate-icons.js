#!/usr/bin/env node
/**
 * Generate PNG icons from SVG for PWA
 * Run: node scripts/generate-icons.js
 * Requires: npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Try to use sharp, fallback to canvas if not available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Sharp not installed. Run: npm install sharp');
  process.exit(1);
}

const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const SVG_PATH = path.join(__dirname, '..', 'icons', 'icon.svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'icons');

async function generateIcons() {
  console.log('Generating icons from SVG...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Read SVG
  const svgBuffer = fs.readFileSync(SVG_PATH);

  // Generate each size
  for (const size of ICON_SIZES) {
    const outputPath = path.join(OUTPUT_DIR, `icon-${size}x${size}.png`);

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`  Generated: icon-${size}x${size}.png`);
  }

  console.log('Done! Icons generated in:', OUTPUT_DIR);
}

generateIcons().catch(console.error);
