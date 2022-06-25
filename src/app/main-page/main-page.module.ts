import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    CoreModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule { }
