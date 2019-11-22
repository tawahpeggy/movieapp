import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from'@angular/common/http';
import { catchError } from'rxjs/operators';
import { throwError, pipe, Subject } from'rxjs';

interface authResponseData {
  idToken:string;
  email:string;
  refreshToken:string;
  expiresin:string;
  localid:string;
  registered?:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor( private http :HttpClient) { }

  //signup method
  signup(email:string, password:string){
return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDl1L5-XE9RClvuqLHDn21_eOccPC-rmYs',
  {
   email: email,
   password: password,
   returnSecureToken: true
  }
  
  )
 .pipe(
    catchError(this.handleError)
  //, tap(resData =>{
  //    const expirationDate=new Date();
  //    const user = new user(resData.email,resData.localId,resdata.idTo)
  //  )
    
  );
    }
 //LOGIN METHOD
 login(email:string, password:string){
  return this.http.post<authResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDl1L5-XE9RClvuqLHDn21_eOccPC-rmYs',
    {
     email: email,
     password: password,
     returnSecureToken: true
    }
    
    )
    .pipe(catchError(this.handleError));
}
private handleError(errorRes:HttpErrorResponse){
  let errorMessage='An unknown error occured!';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage='this email already Exists';
        break;
      case 'EMAIL_NOT_FOUND':
          errorMessage='this email does not exist.';
         break;
         case 'INVALID_PASSWORD':
         errorMessage='This password is not correct';


      }
      return throwError(errorMessage);
    }
}

