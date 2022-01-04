import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NsModalDialogComponent} from './dialog.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";
import {NsModalComponent} from "./modal.component";
import {NsModalService} from "./modal.service";
import { NsModalContentDirective } from './modal-content.directive';

const Components = [
  NsModalDialogComponent,
  NsModalComponent,
  NsModalContentDirective
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  providers: [
    NsModalService
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
  ]
})
export class NSModalModule {
}
