import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewItemComponent} from "./review-item/review-item.component";

@NgModule({
  declarations: [ReviewItemComponent],
  exports: [ReviewItemComponent],
  imports: [
    CommonModule
  ]
})
export class ReviewModule { }
