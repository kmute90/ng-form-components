import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { TgInputComponent } from './tg-input/tg-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveInputComponent } from './reactive-input/reactive-input.component';

@NgModule({
  declarations: [
    TgInputComponent,
    ReactiveInputComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  exports: [
    TgInputComponent,
    ReactiveInputComponent
  ],
  providers: [],
})
export class TgFormFieldsModule { }
