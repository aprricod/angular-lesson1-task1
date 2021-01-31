import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Module1Component],
  exports: [Module1Component],
  imports: [
    CommonModule, FormsModule

  ]
})
export class Module1Module { }
