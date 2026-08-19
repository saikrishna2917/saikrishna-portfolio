const fs = require('fs');

const cssPath = 'd:/SaiKrishna_portfolio/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const replacements = [
  // Card backgrounds
  ['rgba(22, 27, 34, 0.92)', 'rgba(255, 255, 255, 0.92)'],
  ['rgba(13, 17, 23, 0.97)', 'rgba(240, 244, 248, 0.97)'],
  // Card borders
  ['rgba(48, 54, 61, 0.8)', 'rgba(203, 213, 225, 0.8)'],
  ['rgba(48, 54, 61, 0.65)', 'rgba(203, 213, 225, 0.65)'],
  // Dark colors
  ['#161b22', '#ffffff'],
  ['#0d1117', '#f1f5f9'],
  ['#05080f', '#f8fafc'],
  ['#070b11', '#f8fafc'],
  ['#090d15', '#f1f5f9'],
  // Glow accents (cyan to lighter cyan/blue)
  ['0, 229, 255', '14, 165, 233'],
  // Green accents
  ['63, 185, 80', '16, 185, 129'],
  // Orange accents
  ['255, 123, 114', '249, 115, 22'],
  // Yellow accents (warn)
  ['#ffbd2e', '#eab308'],
  // Text colors
  ['#e6edf3', '#0f172a'],
  ['#8b949e', '#475569'],
  // Terminal background
  ['#0d1117', '#e2e8f0'],
  // Timeline dot
  ['#30363d', '#cbd5e1'],
  // Specific hardcoded opacities that need adjusting for light mode
  ['rgba(255, 255, 255, 0.04)', 'rgba(0, 0, 0, 0.04)'],
  ['rgba(255, 255, 255, 0.78)', 'rgba(0, 0, 0, 0.78)'],
];

replacements.forEach(([search, replace]) => {
  // Use global regex if the search string has no special regex characters other than what we escape
  const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  css = css.replace(regex, replace);
});

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully replaced dark theme colors with light theme colors in index.css');
