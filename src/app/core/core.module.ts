import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import components from './components';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  MatExpansionModule,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ...MATERIAL,
  ],
  exports: [
    components,
    ...MATERIAL,
  ]
})
export class CoreModule { }
