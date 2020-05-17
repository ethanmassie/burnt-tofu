import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';
import {ReviewModule} from "../../shared/review/review.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPageRoutingModule,
    ReviewModule
  ],
  declarations: [ReviewPage]
})
export class ReviewPageModule {}
