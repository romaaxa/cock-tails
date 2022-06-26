import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRoutingModule } from './main-page.routing.module';
import { CoreModule } from '../core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

/**
 * Material modules
 */
const MATERIAL = [
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
];

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
    ...MATERIAL,
  ],
  exports: [
    ...MATERIAL,
  ]
})
export class MainPageModule { }
