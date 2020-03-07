import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { TgInputComponent } from './tg-input/tg-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TgInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    TgInputComponent,
  ],
  providers: [],
})
export class TgFormFieldsModule { }
