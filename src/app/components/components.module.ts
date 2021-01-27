import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCmpComponent } from './my-cmp/my-cmp.component';

@NgModule({
  declarations: [MyCmpComponent],
  imports: [
    CommonModule
  ],
  exports: [MyCmpComponent]
})
export class ComponentsModule { }
