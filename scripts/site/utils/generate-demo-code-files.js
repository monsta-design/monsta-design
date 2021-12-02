const path = require('path');
const fs = require('fs-extra');
const PrismAngular = require('./angular-language-marked');

module.exports = function generateDemoCodeFiles(content, sitePath) {
  const demoMap = content.demoMap;
  for (const key in demoMap) {
    let ts = ''
    if (demoMap[key] && demoMap[key].ts) {
      ts = demoMap[key].ts
    }
    const highlightCode = PrismAngular.highlight(ts, Prism.languages['angular']);
    const rawCode = demoMap[key].ts;
    const targetPath = path.join(sitePath, 'doc/assets/codes', `${content.name}-demo-${key}.json`);

    fs.ensureFileSync(targetPath);
    fs.writeJSONSync(targetPath, {
      highlightCode,
      rawCode
    }, {})
  }
};
