/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/* eslint-disable import/no-unassigned-import */
import {task} from 'gulp';
// import './tasks/clean';
// import './tasks/default';
// import './tasks/schematic';
// import './tasks/unit-test';
// import './tasks/universal';
//
// import './tasks/library';
import './tasks/site';
//
// task('build:release', series('clean', 'build:library', 'build:release-site'));
//
// task('build:preview', series('clean', 'init:site', 'build:site-doc-es5'));
//
// task('start:dev', series('clean', 'start:site'));

const parseDemoMd = require('../site/utils/parse-demo-md')
const fs = require('fs-extra');


task('default', done => {
  console.log('Hello world!')
  const file = fs.readFileSync('./src/components/alert/readme.md')
  const result = parseDemoMd(file)
  console.log(result)
  done()
})


