const fs = require('fs');
let code = fs.readFileSync('app_extracted.js', 'utf8');

const start = code.indexOf('Ch=({');
console.log(code.slice(start, start + 4000));
