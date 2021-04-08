import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  loggedinuser = {
    username: "",
    password: ""
  }
  constructor(private route:Router) {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const userdata = this.userInfo.getValue();
    console.log("1-loaduserinfo")
    if (!userdata) {
      console.log("2-loaduserinfo")
      const accesstoken = localStorage.getItem('currentUser');
      if (accesstoken) {
        const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
        const data = {
          access_token: accesstoken,
          username: decryptedUser.username,
          userpassword: decryptedUser.password

        };
        this.userInfo.next(data);
      }
    }
  }


  login(username1: string, password1: string) {


    // login successful 
    if (username1 == "admin" && password1 == "1234") {
      this.loggedinuser.username = username1;
      this.loggedinuser.password = password1;
      // store user details and jwt token in local storage to keep user logged in between page refreshes

      localStorage.setItem('currentUser', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0In0.rSE93wQJ4oBA1r81PfUnhuXeJsRfFm4NnpT_IjIC190');
      this.route.navigate(['student_list']);
      console.log(this.userInfo);
      return this.loggedinuser;
    } else {
      alert("you are not has access to login please login with the correct username");
    }

  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.userInfo=null

  }
}
