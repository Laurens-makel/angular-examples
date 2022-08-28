/** Value can't match the given regular expression */
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function blackListValidator(regex: RegExp): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regex.test(control.value);
    return forbidden ? {blacklist: true} : null;
  };

}
