const path = require('path');
const fs = require('fs');
const capitalizeFirstLetter = require('./capitalize-first-letter');
const camelCase = require('./camelcase');

module.exports = function (showCaseComponentPath, result) {
  if (result.pageDemo) {
    const pageDemoComponent = generatePageDemoComponent(result);
    fs.writeFileSync(path.join(showCaseComponentPath, `zh.page.component.ts`), pageDemoComponent.zh);
    fs.writeFileSync(path.join(showCaseComponentPath, `en.page.component.ts`), pageDemoComponent.en);
  }
  const demoTemplate = generateTemplate(result);
  fs.writeFileSync(path.join(showCaseComponentPath, `zh.html`), demoTemplate.zh);
  fs.writeFileSync(path.join(showCaseComponentPath, `en.html`), demoTemplate.en);
  const demoComponent = generateDemoComponent(result);
  fs.writeFileSync(path.join(showCaseComponentPath, `zh.component.ts`), demoComponent.zh);
  fs.writeFileSync(path.join(showCaseComponentPath, `en.component.ts`), demoComponent.en);
  const demoModule = generateDemoModule(result);
  fs.writeFileSync(path.join(showCaseComponentPath, `index.module.ts`), demoModule);
};

function generateDemoModule(content) {
  const demoModuleTemplate = String(fs.readFileSync(path.resolve(__dirname, '../template/demo-module.template.ts')));
  const component = content.name;
  const demoMap = content.demoMap;
  let imports = '';
  let declarations = '';
  let entryComponents = [];
  for (const key in demoMap) {
    const declareComponents = [`NSDemo${componentName(component)}${componentName(key)}Component`];
    const entries = retrieveEntryComponents(demoMap[key] && demoMap[key].ts);
    entryComponents.push(...entries);
    declareComponents.push(...entries);
    imports += `import { ${declareComponents.join(', ')} } from './${key}';\n`;
    declarations += `\t\t${declareComponents.join(',\n\t')},\n`;
  }
  imports += `import { NSDemo${componentName(component)}ZhComponent } from './zh.component';\n`;
  imports += `import { NSDemo${componentName(component)}EnComponent } from './en.component';\n`;
  declarations += `\t\tNSDemo${componentName(component)}ZhComponent,\n`;
  declarations += `\t\tNSDemo${componentName(component)}EnComponent,\n`;
  if (content.pageDemo) {
    imports += `import { NSPageDemo${componentName(component)}ZhComponent } from './zh.page.component';\n`;
    imports += `import { NSPageDemo${componentName(component)}EnComponent } from './en.page.component';\n`;
    declarations += `\t\tNSPageDemo${componentName(component)}ZhComponent,\n`;
    declarations += `\t\tNSPageDemo${componentName(component)}EnComponent,\n`;
  }
  return demoModuleTemplate
    .replace(/{{imports}}/g, imports)
    .replace(/{{declarations}}/g, declarations)
    .replace(/{{component}}/g, componentName(component))
    .replace(/{{entryComponents}}/g, entryComponents.join(',\n'));
}

function componentName(component) {
  return camelCase(capitalizeFirstLetter(component));
}

function generateComponentName(component, language) {
  return `NSDemo${componentName(component)}${capitalizeFirstLetter(language)}Component`;
}

function generatePageDemoComponent(content) {
  const component = content.name;
  let zhOutput = content.pageDemo.zhCode;
  let enOutput = content.pageDemo.enCode;
  zhOutput = zhOutput
    .replace(`NSPageDemo${componentName(component)}Component`, `NzPageDemo${componentName(component)}ZhComponent`)
    .replace(`ns-page-demo-${component}`, `ns-page-demo-${component}-zh`);
  enOutput = enOutput
    .replace(`NSPageDemo${componentName(component)}Component`, `NzPageDemo${componentName(component)}EnComponent`)
    .replace(`ns-page-demo-${component}`, `ns-page-demo-${component}-en`);
  return {
    en: enOutput,
    zh: zhOutput
  };
}

function generateDemoComponent(content) {
  const demoComponentTemplate = String(fs.readFileSync(path.resolve(__dirname, '../template/demo-component.template.ts')));
  const component = content.name;

  let output = demoComponentTemplate;
  output = output.replace(/{{component}}/g, component);

  let zhOutput = output;
  let enOutput = output;

  enOutput = enOutput.replace(/{{componentName}}/g, generateComponentName(component, 'en'));
  enOutput = enOutput.replace(/{{language}}/g, 'en');
  zhOutput = zhOutput.replace(/{{componentName}}/g, generateComponentName(component, 'zh'));
  zhOutput = zhOutput.replace(/{{language}}/g, 'zh');

  return {
    en: enOutput,
    zh: zhOutput
  };
}

function generateTemplate(result) {
  const generateTitle = require('./generate.title');
  const innerMap = generateExample(result);
  const titleMap = {
    zh: generateTitle(result.docZh.meta, result.docZh.path),
    en: generateTitle(result.docEn.meta, result.docEn.path)
  };

  const name = result.name;
  const hasPageDemo = !!result.pageDemo;
  return {
    zh: wrapperAll(
      generateToc('zh-CN', result.name, result.demoMap, result.docZh.toc),
      wrapperHeader(titleMap.zh, result.docZh.whenToUse, 'zh', innerMap.zh, hasPageDemo, name) + wrapperAPI(result.docZh.api)
    ),
    en: wrapperAll(
      generateToc('en-US', result.name, result.demoMap, result.docEn.toc),
      wrapperHeader(titleMap.en, result.docEn.whenToUse, 'en', innerMap.en, hasPageDemo, name) + wrapperAPI(result.docEn.api)
    )
  };
}

function wrapperAPI(content) {
  return `<section class="markdown api-container" ngNonBindable>${content}</section>`;
}

function wrapperHeader(title, whenToUse, language, example, hasPageDemo, name) {
  if (example) {
    return `<section class="markdown">
	${title}
	<section class="markdown" ngNonBindable>
		${whenToUse}
	</section>
	${hasPageDemo ? `<section class="page-demo"><nz-page-demo-${name}-${language}></nz-page-demo-${name}-${language}></section>` : ''}
	<h2 id="demos">
		<span>${language === 'zh' ? '代码演示' : 'Examples'}</span>
		<i  class="code-box-expand-trigger" title="${
      language === 'zh' ? '展开全部代码' : 'Expand All Code'
    }" (click)="expandAllCode()"></i>
	</h2>
</section>${example}`;
  } else {
    return `<section class="markdown">
	${title}
	<section class="markdown">
		${whenToUse}
	</section></section>`;
  }
}

function wrapperAll(toc, content) {
  return `<article class="article">${toc}${content}</article>`;
}

function generateToc(language, name, demoMap, toc) {

  let linkArray = [];
  let modules = {}
  for (const key in demoMap) {
    let lvl = 3
    if (typeof demoMap[key].meta.module != "undefined") {
      const moduleKey = demoMap[key].meta.module[language].toLowerCase().replace(/ /g, '-').replace(/\./g, '-').replace(/\?/g, '');
      if (typeof modules[moduleKey] === 'undefined') {
        modules[moduleKey] = false
      }
      lvl = 4
      if (!modules[moduleKey]) {
        modules[moduleKey] = true
        linkArray.push({
          content: `<ns-scrollspy-item target="components-${name}-demo-${moduleKey}" level="3">${demoMap[key].meta.module[language]}</ns-scrollspy-item>`,
          order: demoMap[key].meta.order
        });
      }
    }
    linkArray.push({
      content: `<ns-scrollspy-item target="components-${name}-demo-${key}" level="${lvl}">${demoMap[key].meta.title[language]}</ns-scrollspy-item>`,
      order: demoMap[key].meta.order
    });
  }

  linkArray.sort((pre, next) => pre.order - next.order);
  let mainLinks = []
  for (let i = 0; i < toc.length; i++) {
    const item = toc[i]
    if (item.slug === 'api') {
      mainLinks.push(`<ns-scrollspy-item target="demos" level="2">代码演示</ns-scrollspy-item>`);
      mainLinks.push(linkArray.map(link => link.content).join(''))
    }
    mainLinks.push(`<ns-scrollspy-item target="${item.slug}" level="${item.lvl}">${item.content}</ns-scrollspy-item>`)
  }
  const mainLinksHtml = mainLinks.join('\n')
  return `<ns-scrollspy #toc [style.right]="scrollspyRight" class="toc">${mainLinksHtml}</ns-scrollspy>`
}

function generateExample(result) {
  const demoMap = result.demoMap;
  const isZhUnion = result.docZh.meta.cols;
  const isEnUnion = result.docEn.meta.cols;
  const templateSplit = String(fs.readFileSync(path.resolve(__dirname, '../template/example-split.template.html')));
  const templateUnion = String(fs.readFileSync(path.resolve(__dirname, '../template/example-union.template.html')));
  let demoList = [];
  for (const key in demoMap) {
    demoList.push(Object.assign({name: key}, demoMap[key]));
  }
  demoList.sort((pre, next) => {
    if (typeof pre.meta === 'undefined' || typeof next.meta === 'undefined') {
      return 0
    }
    // if (typeof pre.meta === 'undefined') {
    //   console.log('result:', result)
    //   console.log('pre:', pre)
    //   throw new Error('pre meta is undefined')
    // }
    // if (typeof next.meta === 'undefined') {
    //   console.log('result:', result)
    //   console.log('next:', next)
    //   throw new Error('next meta is undefined')
    // }
    return pre.meta.order - next.meta.order
  });
  let firstZhPart = '';
  let secondZhPart = '';
  let firstEnPart = '';
  let secondEnPart = '';
  let enPart = '';
  let zhPart = '';
  demoList.forEach((item, index) => {
    enPart += item.enCode;
    zhPart += item.zhCode;
    if (index % 2 === 0) {
      firstZhPart += item.zhCode;
      firstEnPart += item.enCode;
    } else {
      secondZhPart += item.zhCode;
      secondEnPart += item.enCode;
    }
  });
  return {
    zh: isZhUnion
      ? templateUnion.replace(/{{content}}/g, zhPart)
      : templateSplit.replace(/{{first}}/g, firstZhPart).replace(/{{second}}/g, secondZhPart),
    en: isEnUnion
      ? templateUnion.replace(/{{content}}/g, enPart)
      : templateSplit.replace(/{{first}}/g, firstEnPart).replace(/{{second}}/g, secondEnPart)
  };
}

function retrieveEntryComponents(plainCode) {
  const matches = (plainCode + '').match(/^\/\*\s*?declarations:\s*([^\n]+?)\*\//) || [];
  if (matches[1]) {
    return matches[1]
      .split(',')
      .map(className => className.trim())
      .filter((value, index, self) => value && self.indexOf(value) === index);
  }
  return [];
}
