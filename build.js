const fs = require('fs');
const path = require('path');
const { bundle, transform } = require('lightningcss');

// Read version from package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const header = `/* ==UserStyle==
@name           AU TOPdesk Styling
@namespace      github.com/AarhusUniversitet/au-topdesk-styling
@version        ${pkg.version}
@description    Shared AU TOPdesk UI fixes
@homepageURL    https://github.com/AarhusUniversitet/au-topdesk-styling
@supportURL     https://github.com/AarhusUniversitet/au-topdesk-styling/issues
@updateURL      https://aarhusuniversitet.github.io/au-topdesk-styling/dist/au-topdesk.user.css
@license        MIT
@preprocessor   default
==/UserStyle== */

@-moz-document domain("au.topdesk.net") {
    `;

const footer = `
}`;

// Bundle and minify CSS modules
const modulesDir = 'dist/modules';
const modules = fs.readdirSync(modulesDir)
  .filter(file => file.endsWith('.css'))
  .map(file => path.join(modulesDir, file))
  .sort(); // Ensure consistent build order

let combinedCSS = '';

// Read and combine all module files
modules.forEach(modulePath => {
  combinedCSS += fs.readFileSync(modulePath, 'utf8') + '\n';
  console.log(`  + ${modulePath}`);
});

// Minify the combined CSS using Lightning CSS
const { code } = transform({
  filename: 'bundle.css',
  code: Buffer.from(combinedCSS),
  minify: true
});

// Combine header, minified CSS, and footer
const output = header + code.toString('utf8') + footer;

// Write output file
fs.writeFileSync('dist/au-topdesk.user.css', output, 'utf8');

console.log('✓ Built and minified dist/au-topdesk.user.css');
console.log(`  Size: ${(Buffer.byteLength(output) / 1024).toFixed(2)} KB`);
