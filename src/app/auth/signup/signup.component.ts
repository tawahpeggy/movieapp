import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  error:string= null;
  successfulSignup:string = null;
constructor(private authService: AuthService)  { }
   onSubmit(form: NgForm){
      if (!form.valid) {
      return;
    }
    
     const email= form.value.email;
     const password= form.value.password;
      this.isLoading=true;
     this.authService.signup(email, password,).subscribe (resData => {
    console.log(resData);
    console.log(this.successfulSignup);
    this.successfulSignup="congrates suceessfully signed up."
    form.reset();
    this.isLoading=false;
     },
     //to do an alert in typescript all we need to do is define a variable and then write the console.log message inside the defined variable.
    errorMessage => {
      console.log(errorMessage);
      this.error=errorMessage;
      this.isLoading=false;  
    }
   );
   console.log(form.value);
    
   }
ngOnInit() {
}

}
