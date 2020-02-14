import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading: boolean=false;
  error: string;
  successfulSignup: string;

constructor(private authService: AuthService, private router :Router) {  }
onSubmit(form: NgForm){
 

const email= form.value.email;
  const password= form.value.password;
 this.isLoading=true;
this.authService.login(email, password,).subscribe (resData => {
console.log(resData);
console.log(this.successfulSignup);
// this.router.navigate(['/movies'])
this.successfulSignup="congratulations you have successfully logged in";
this.isLoading=false;
},
//to do an alert in typescript all we need to do is define a variable and then write the console.log message inside the defined variable.
errorMessage => {
 console.log(errorMessage);
 this.error=errorMessage;
 this.isLoading=false;  
}
)
console.log(form.value);
form.reset();



}
ngOnInit() {
}

 }
