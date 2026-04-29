import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const inputRoot = path.join(projectRoot, 'public', 'images');

const exts = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  try {
    await fs.access(inputRoot);
  } catch {
    console.error(`Input folder not found: ${inputRoot}`);
    process.exit(1);
  }

  const files = await walk(inputRoot);
  const images = files.filter((f) => exts.has(path.extname(f).toLowerCase()));

  let converted = 0;
  for (const file of images) {
    const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
    try {
      await fs.access(out);
      continue; // already converted
    } catch {
      // continue
    }

    await sharp(file)
      .webp({ quality: 82 })
      .toFile(out);

    converted += 1;
  }

  console.log(`Found ${images.length} images. Converted ${converted} new .webp files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

