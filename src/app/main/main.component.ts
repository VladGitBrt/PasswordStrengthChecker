import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  sectionMode: 'easy'|'medium'|'hard'|'empty' = 'empty';

  inputGroup = new FormGroup({
    password: new FormControl('',[Validators.minLength(8)])
  })

  passwordChange():void {
    let stringPassword = this.inputGroup.value.password;
    if(stringPassword){
      const hasLetters = /[a-zA-Z]/.test(stringPassword);
      const hasDigits = /\d/.test(stringPassword);
      const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(stringPassword);
      
      if(hasLetters || hasDigits || hasSymbols) {
        this.sectionMode = 'easy';
      }
      if((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.sectionMode = 'medium'
      }
      if(hasDigits && hasLetters && hasSymbols) {
        this.sectionMode = 'hard'
      }
    } else {
      this.sectionMode = 'empty'
    }
    console.log(this.sectionMode)
  }
}
