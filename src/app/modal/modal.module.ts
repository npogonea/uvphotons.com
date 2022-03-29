import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { OrdermodalComponent } from './ordermodal/ordermodal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent, OrdermodalComponent],
    exports: [ModalComponent]
})
export class ModalModule { }