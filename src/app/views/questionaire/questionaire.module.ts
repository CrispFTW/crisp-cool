import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

import { QuestionaireRoutingModule } from './questionaire-routing.module';
import { QuestionaireComponent } from './questionaire.component';


@NgModule({
  declarations: [QuestionaireComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    QuestionaireRoutingModule,
  ],
})
export class QuestionaireModule { }
