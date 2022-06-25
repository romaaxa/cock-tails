import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule { }
