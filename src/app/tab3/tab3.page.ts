import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {

   }

   ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      eyes: ['', [Validators.required, Validators.minLength(2)]],
      estatura: ['', [Validators.required, Validators.minLength(2)]],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      tez: ['', [Validators.required, Validators.minLength(2)]],
      cabello: ['', [Validators.required, Validators.minLength(2)]],
      complexion: ['', [Validators.required, Validators.minLength(2)]],
      particulares: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }
 

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Proporcione todos los valores requeridos!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }


}
