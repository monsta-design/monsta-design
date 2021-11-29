// @ts-ignore
import readme from '!raw-loader!projects/lib/src/sidebar/readme.md';
// @ts-ignore
import basicDoc from '!raw-loader!projects/lib/src/sidebar/demo/basic.md';
// @ts-ignore
import basicCode from '!raw-loader!projects/lib/src/sidebar/demo/basic.component';

import {NsSidebarBasicComponent} from 'projects/lib/src/sidebar/demo/basic.component';
// import {Examples} from 'projects/site/src/app/common/document/document.component';

export const data = {
  doc: readme,
  examples: {
    col: 2,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NsSidebarBasicComponent
      },
      {
        doc: basicDoc,
        code: basicCode,
        component: NsSidebarBasicComponent
      },
    ]
  }
}
