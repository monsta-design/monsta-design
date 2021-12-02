// import * as fs from 'fs-extra';
import {task} from 'gulp';

const siteGenerate = require('../../site/generate-site');


/** Parse demos and docs to site directory. */
task('init:site', done => {
  siteGenerate('init');
  // colorGenerate().then(themeGenerate).then(done);
  done()
});
