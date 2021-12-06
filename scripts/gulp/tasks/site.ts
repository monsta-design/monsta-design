// import * as fs from 'fs-extra';
import {parallel, series, task, watch} from 'gulp';

import {execNodeTask} from '../util/task-helpers';
import {join} from "path";
import {buildConfig} from '../../build-config';
import {debounce} from 'lodash';

const detectPort = require('detect-port');
const docsGlob = join(buildConfig.componentsDir, `**/doc/*.+(md|txt)`);
const demoGlob = join(buildConfig.componentsDir, `**/demo/*.+(md|ts)`);

const siteGenerate = require('../../site/generate-site');

/** Parse demos and docs to site directory. */
task('init:site', done => {
  siteGenerate('init');
  // colorGenerate().then(themeGenerate).then(done);
  done()
});

/**
 * Development app watch task,
 * to ensures the demos and docs have changes are rebuild.
 */
task('watch:site', () => {
  // Globs accepts the Unix-style path separators only
  const globs = [docsGlob, demoGlob].map(p => p.replace(/\\/g, '/'));
  watch(globs).on(
    'change',
    debounce(path => {
      const p = path.replace(/\\/g, '/');
      const execArray = /components\/(.+)\/(doc|demo)/.exec(p);
      if (execArray && execArray[1]) {
        const component = execArray[1];
        console.log(`Reload '${component}'`);
        siteGenerate(component);
      }
    }, 2000)
  );
});

/** Run `ng serve` */
task('serve:site', done => {
  detectPort(4300).then((port: number) => {
    execNodeTask('@angular/cli', 'ng', ['serve', '--port', port === 4300 ? '4300' : '0'])(done);
  });
});


/** Init site directory, and start watch and ng-serve */
task('start:site', series('init:site', parallel('watch:site', 'serve:site')));


