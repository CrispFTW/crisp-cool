import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'questionaire',
  templateUrl: './questionaire.component.html',
  styleUrls: ['./questionaire.component.scss']
})
export class QuestionaireComponent implements OnInit {

  questionaireForm: FormGroup;
  interestedInOptions: string[]; // FIXME: Should probably be an object where we can match id to type and use an enum
  get interestedIn (): FormControl | AbstractControl {
    return this.questionaireForm.get('interestedIn');
  }
  get investmentProperties (): FormControl | AbstractControl {
    return this.questionaireForm.get('investmentProperties');
  }
  get unitGoal (): FormControl | AbstractControl {
    return this.questionaireForm.get('unitGoal');
  }
  get propertyManagement (): FormControl | AbstractControl {
    return this.questionaireForm.get('propertyManagement');
  }
  get funding (): FormControl | AbstractControl {
    return this.questionaireForm.get('funding');
  }
  get closingRequirements (): FormControl | AbstractControl {
    return this.questionaireForm.get('closingRequirements');
  }

  constructor (private fb: FormBuilder) { }

  ngOnInit () {
    this.questionaireForm = this.fb.group({
      interestedIn: ['', Validators.required], // multiselect
      investmentProperties: [
        '',
        [
          Validators.required,
          Validators.pattern('\d')
        ]
      ], // can probably be a radio
      unitGoal: [null, Validators.required], // should be a number
      propertyManagement: ['', Validators.required], // could be a radio
      funding: [null, Validators.required], // multiselect
      closingRequirements: [null, Validators.required], // multiselect
    });
  }

}
