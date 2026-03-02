#!/usr/bin/env node
// Patches dist/package.json after ng-packagr build to add the ./styles export.
// This allows consumers to import SCSS via:
//   @use '@pixeltraits/design-system/styles';

const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(__dirname, '../dist/package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.exports['./styles'] = { default: './styles/_index.scss' };

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log('Patched dist/package.json: added ./styles export');
