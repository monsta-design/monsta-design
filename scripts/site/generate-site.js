const fs = require('fs-extra');
const path = require('path');
const parseDocMdUtil = require('./utils/parse-doc-md');
const parseDemoMdUtil = require('./utils/parse-demo-md');
const nameWithoutSuffixUtil = require('./utils/name-without-suffix');
const generateCodeBox = require('./utils/generate-code-box');
const generateDemo = require('./utils/generate-demo');
const generateDemoCodeFiles = require('./utils/generate-demo-code-files');
const generateDocs = require('./utils/generate-docs');
const generateRoutes = require('./utils/generate-routes');
// const generateIframe = require('./utils/generate-iframe');
const capitalizeFirstLetter = require('./utils/capitalize-first-letter');
const camelCase = require('./utils/camelcase');
const getMeta = require('./utils/get-meta');
const toc = require('markdown-toc')
const arg = process.argv[2];
// create site folder
const showCasePath = path.resolve(__dirname, '../../site');

function generate(target) {

  fs.removeSync(`${showCasePath}`);
  fs.copySync(path.resolve(__dirname, '_site'), `${showCasePath}`);

  const showCaseTargetPath = `${showCasePath}/doc/app/`;
  const iframeTargetPath = `${showCasePath}/iframe/app/`;

  // read components folder
  const rootPath = path.resolve(__dirname, '../../components');
  const rootDir = fs.readdirSync(rootPath);
  const componentsDocMap = {};
  const componentsMap = {};
  const isSyncSpecific = true
  rootDir.forEach(componentName => {
    if (isSyncSpecific) {
      //   if (componentName !== target) {
      //     return;
      //   }
      // }
      const componentDirPath = path.join(rootPath, componentName);
      const skips = ['core', 'locale', 'cdk', 'i18n', 'version', 'experimental'];
      if (skips.indexOf(componentName) !== -1) {
        return;
      }
      if (fs.statSync(componentDirPath).isDirectory()) {

        const showCaseComponentPath = path.join(showCaseTargetPath, componentName);
        fs.mkdirSync(showCaseComponentPath);

        const demoDirPath = path.join(componentDirPath, 'demo');
        const demoMap = {};
        if (fs.existsSync(demoDirPath)) {
          const demoDir = fs.readdirSync(demoDirPath);
          demoDir.forEach(demo => {
            if (/.md$/.test(demo)) {
              const nameKey = nameWithoutSuffixUtil(demo);
              const demoMarkDownFile = fs.readFileSync(path.join(demoDirPath, demo));
              demoMap[nameKey] = parseDemoMdUtil(demoMarkDownFile);
              demoMap[nameKey]['name'] = `NSDemo${camelCase(capitalizeFirstLetter(componentName))}${camelCase(
                capitalizeFirstLetter(nameKey)
              )}Component`;
              if (demoMap[nameKey].meta.title === null || typeof demoMap[nameKey].meta.title === 'undefined') {
                demoMap[nameKey].meta.title = {}
                demoMap[nameKey].meta.title['zh-CN'] = demoMap[nameKey].meta['zh-CN']
                demoMap[nameKey].meta.title['en-US'] = demoMap[nameKey].meta['en-US']
              }
              demoMap[nameKey]['enCode'] = generateCodeBox(
                componentName,
                demoMap[nameKey]['name'],
                nameKey,
                demoMap[nameKey].meta.title['en-US'],
                demoMap[nameKey].en,
                demoMap[nameKey].meta.iframe
              );
              demoMap[nameKey]['zhCode'] = generateCodeBox(
                componentName,
                demoMap[nameKey]['name'],
                nameKey,
                demoMap[nameKey].meta.title['zh-CN'],
                demoMap[nameKey].zh,
                demoMap[nameKey].meta.iframe
              );
            }
            if (/.ts$/.test(demo) && demo.indexOf('.module.ts') === -1) {
              const nameKey = nameWithoutSuffixUtil(demo);
              demoMap[nameKey].ts = String(fs.readFileSync(path.join(demoDirPath, demo)));
              // copy ts file to site->${component} folder
              fs.writeFileSync(path.join(showCaseComponentPath, demo), demoMap[nameKey].ts);
            }
            if (demo === 'module') {
              const data = String(fs.readFileSync(path.join(demoDirPath, demo)));
              fs.writeFileSync(path.join(showCaseComponentPath, 'module.ts'), data);
            }
          });
        }

        // handle components->${component}->page folder, parent component of demo page
        let pageDemo = '';
        const pageDirPath = path.join(componentDirPath, 'page');
        if (fs.existsSync(pageDirPath)) {
          const pageDir = fs.readdirSync(pageDirPath);
          let zhLocale = '';
          let enLocale = '';
          pageDemo = {};
          pageDir.forEach(file => {
            if (/.ts$/.test(file)) {
              pageDemo.raw = String(fs.readFileSync(path.join(pageDirPath, file)));
            }
            if (/^zh-CN.txt$/.test(file)) {
              zhLocale = String(fs.readFileSync(path.join(pageDirPath, file)));
            }
            if (/^en-US.txt$/.test(file)) {
              enLocale = String(fs.readFileSync(path.join(pageDirPath, file)));
            }
          });
          pageDemo.enCode = pageDemo.raw.replace(/locale;/g, enLocale);
          pageDemo.zhCode = pageDemo.raw.replace(/locale;/g, zhLocale);
        }

        // handle components->${component}->doc folder
        const docZh = fs.readFileSync(path.join(componentDirPath, 'doc/index.zh-CN.md'));
        const docEn = fs.readFileSync(path.join(componentDirPath, 'doc/index.en-US.md'));
        const result = {
          name: componentName,
          docZh: parseDocMdUtil(docZh, `components/${componentName}/doc/index.zh-CN.md`),
          docEn: parseDocMdUtil(docEn, `components/${componentName}/doc/index.en-US.md`),
          demoMap,
          pageDemo
        };

        componentsDocMap[componentName] = {zh: result.docZh.meta, en: result.docEn.meta};
        componentsMap[componentName] = demoMap;

        generateDemo(showCaseComponentPath, result);
        generateDemoCodeFiles(result, showCasePath);
      }
    }
  });

  // handle iframe folder
  // generateIframe(iframeTargetPath, componentsMap);

  // if (!isSyncSpecific) {
  // read docs folder
  const docsPath = path.resolve(__dirname, '../../docs');
  const docsDir = fs.readdirSync(docsPath);
  let docsMap = {};
  let docsMeta = {};
  docsDir.forEach(doc => {
    const name = nameWithoutSuffixUtil(doc);
    docsMap[name] = {
      zh: fs.readFileSync(path.join(docsPath, `${name}.zh-CN.md`)),
      en: fs.readFileSync(path.join(docsPath, `${name}.en-US.md`))
    };
    docsMeta[name] = {
      zh: getMeta(docsMap[name].zh),
      en: getMeta(docsMap[name].en)
    };
  });

  generateDocs(showCaseTargetPath, docsMap);
  generateRoutes(showCaseTargetPath, componentsDocMap, docsMeta);
  // }
}

if (require.main === module) {
  generate(arg);
}

module.exports = generate;
