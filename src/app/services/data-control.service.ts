import { Injectable } from '@angular/core';
import {DataEntry} from "../model/data-entry";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {blackListValidator} from "../validators/black-list-validator";

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  constructor() { }

  toFormGroup(data: DataEntry<any>[]){
    const group: any = {};

    data.forEach(obj => {
      group[obj.id] = this.asFormControl(obj);
    });

    return new FormGroup(group);
  }

  /*
   By default, Angular disables native HTML form validation by adding the novalidate attribute on the enclosing <form>
   and uses directives to match these attributes with validator functions in the framework.

   Please see the following link for a full list of built-in validators: https://angular.io/api/forms/Validators
  */
  asFormControl(obj: DataEntry<any>) : FormControl {
    const validations: ValidatorFn[] = [];

    if(obj.required){
      validations.push(Validators.required);
    }

    if(obj.blacklist){
      validations.push(blackListValidator(new RegExp(obj.blacklist)));
    }

    return new FormControl(obj.value, validations);
  }

}
