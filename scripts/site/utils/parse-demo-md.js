const MD = require('./marked');
const YFM = require('yaml-front-matter');
const toc = require('markdown-toc');
const angularNonBindAble = require('./angular-nonbindable');
// import {remark} from "remark";

module.exports = function parseDemoMd(file) {
  // 获取meta信息
  const meta = YFM.loadFront(file);
  const content = meta.__content;
  delete meta.__content;

  const remark = require('remark')();
  const ast = remark.parse(content);

  // 分离中英文
  let isAfterENHeading = false;

  let zhPart = '';
  let enPart = '';

  for (let i = 0; i < ast.children.length; i++) {
    const child = ast.children[i];
    if (child.type === 'heading' && child.depth === 2 && child.children[0].value === 'en-US') {
      isAfterENHeading = true;
    }
    if (!(child.type === 'heading' && child.depth === 2)) {
      if (!isAfterENHeading) {
        zhPart += MD(remark.stringify(child));
      } else {
        enPart += MD(remark.stringify(child));
      }
    }
  }
  return {
    meta: meta,
    toc: toc(content).json,
    zh: angularNonBindAble(zhPart),
    en: angularNonBindAble(enPart)
  };
};

function extractToc(content){

}
