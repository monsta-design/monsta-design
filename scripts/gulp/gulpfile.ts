/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/* eslint-disable import/no-unassigned-import */
import {series, task} from 'gulp';
import './tasks/site';
// const toc = require('marked-toc')

task('start:dev', series('start:site'));
