const fs = require('fs');
const path = require('path');

const root = process.cwd();
const required = ['README.md', 'manifest.json', 'sources.json', 'rules.json', 'quality-gates.json', 'tests.json', 'DATA_LICENSES.md'];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) {
    throw new Error('Missing required file: ' + file);
  }
}
for (const file of ['manifest.json', 'sources.json', 'rules.json', 'quality-gates.json', 'tests.json']) {
  JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
}
const forbiddenPatterns = [
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/i,
  /\bgh[opsur]_[A-Za-z0-9_]{20,}\b/,
  /\bsk-[A-Za-z0-9_-]{20,}\b/,
  /"rawAddress"\s*:/i,
  /"raw_address"\s*:/i,
  /"recipient"\s*:/i,
  /"privateKey"\s*:/i,
  /"private_key"\s*:/i,
  /"witness"\s*:/i,
  /"phone"\s*:/i
];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else {
      const text = fs.readFileSync(p, 'utf8');
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(text)) {
          throw new Error('Forbidden privacy material in ' + p + ': ' + pattern);
        }
      }
    }
  }
}
walk(root);
console.log('AGID pack validation passed');
