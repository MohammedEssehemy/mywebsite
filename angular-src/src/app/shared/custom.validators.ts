import { FormControl } from '@angular/forms';

export function validateEmail(c: FormControl) {
  let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    
  return !c.value || emailRegex.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

export function validatePassword(c: FormControl) {
  let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return !c.value || strongPasswordRegex.test(c.value) ? null : {
    validatePassword: {
      valid: false
    }
  };
}