import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import components from './components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    components,
  ]
})
export class CoreModule { }
