/* eslint-disable no-console */
const fs = require('fs/promises');
const path = require('path');

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_CONTENT_DIR = path.join(REPO_ROOT, 'public', 'docs', 'content');
const OUT_INDEX_JSON = path.join(REPO_ROOT, 'public', 'docs', 'index.json');

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function stripBom(s) {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function parseFrontmatter(markdown) {
  const original = stripBom(String(markdown || ''));
  const text = original.replace(/\r\n/g, '\n');
  if (!text.startsWith('---\n')) return { data: null, body: original };
  const end = text.indexOf('\n---\n', 4);
  if (end === -1) return { data: null, body: original };
  const raw = text.slice(4, end);
  const body = text.slice(end + '\n---\n'.length);

  // Minimal frontmatter parser: "key: value" or "key: [a, b]"
  // This intentionally avoids adding deps (yaml parser) for now.
  const data = {};
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (!key) continue;
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).trim();
      data[key] = value
        ? value.split(',').map((v) => v.trim()).filter(Boolean)
        : [];
    } else {
      data[key] = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
    }
  }

  return { data, body };
}

function extractTitleFromMarkdown(body) {
  const lines = String(body || '').split('\n');
  for (const line of lines) {
    const m = line.match(/^#\s+(.+?)\s*$/);
    if (m) return m[1].trim();
  }
  return null;
}

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...await walk(full));
    } else if (ent.isFile() && ent.name.toLowerCase().endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

async function main() {
  const files = await walk(DOCS_CONTENT_DIR);
  files.sort((a, b) => a.localeCompare(b));

  const items = [];
  for (const fileAbs of files) {
    const relFromContent = path.relative(DOCS_CONTENT_DIR, fileAbs);
    const slugPath = toPosix(relFromContent).replace(/\.md$/i, '');
    const urlPath = `/docs/${encodeURI(slugPath)}`;
    const filePublicPath = `/docs/content/${toPosix(relFromContent)}`;

    const raw = await fs.readFile(fileAbs, 'utf8');
    const { data, body } = parseFrontmatter(raw);

    const title =
      (data && typeof data.title === 'string' && data.title.trim()) ||
      extractTitleFromMarkdown(body) ||
      path.basename(slugPath);

    const description =
      (data && typeof data.description === 'string' && data.description.trim()) ||
      null;

    const tags =
      (data && Array.isArray(data.tags) && data.tags.length) ? data.tags : [];

    const version =
      (data && typeof data.version === 'string' && data.version.trim()) ||
      null;

    const status =
      (data && typeof data.status === 'string' && data.status.trim()) ||
      null;

    const lastUpdated =
      (data && typeof data.lastUpdated === 'string' && data.lastUpdated.trim()) ||
      null;

    items.push({
      slugPath,
      urlPath,
      file: filePublicPath,
      title,
      description,
      tags,
      version,
      status,
      lastUpdated,
    });
  }

  await fs.mkdir(path.dirname(OUT_INDEX_JSON), { recursive: true });
  await fs.writeFile(OUT_INDEX_JSON, `${JSON.stringify(items, null, 2)}\n`, 'utf8');

  console.log(`Wrote ${items.length} docs entries to ${OUT_INDEX_JSON}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

