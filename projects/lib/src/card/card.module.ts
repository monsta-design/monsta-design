import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSCardComponent} from './card.component';

@NgModule({
    declarations: [NSCardComponent],
    exports: [
        NSCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NSCardModule {
}
