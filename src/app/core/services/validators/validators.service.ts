import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(private userService: UserService) { }

  equalPasswords( pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }
    };
  }

  numDatasetShowValid( control: FormControl ) {

    const numbersValid = [4, 8, 12, 16];
    if ( !numbersValid.includes(control.value) ) {
      return {
        numDatasetShowValid: true
      };
    }

    return null;
  }

}
