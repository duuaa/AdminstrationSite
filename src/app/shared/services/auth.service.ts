import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject ,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  logoutCond: BehaviorSubject<boolean>=new BehaviorSubject(true);
  jwtHelper = new JwtHelperService();
  // auth_contion: boolean = false;
  loggedinuser = {
    username: "",
    password: "",
    access_token: ''
  }
  constructor(private route: Router) {
    this.loadUserInfo();
  }

 private loadUserInfo() {
    const userdata = this.userInfo.getValue();
    if (!userdata) {
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
    if (username1.toLowerCase() == "admin" && password1 == "1234") {
      this.loggedinuser.username = username1;
      this.loggedinuser.password = password1;
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.loggedinuser.access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0In0.rSE93wQJ4oBA1r81PfUnhuXeJsRfFm4NnpT_IjIC190";
      localStorage.setItem('currentUser', this.loggedinuser.access_token);
      this.route.navigate(['student_list']);
      this.userInfo.next(this.loggedinuser);
      this.logoutCond.next(false);
      return true;
    } else {

      alert("you are not has access to login please login with the correct username");
      return false;
    }

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userInfo.next(null);
    this.logoutCond.next(true);
    this.route.navigateByUrl('');
    // this.auth_contion = false;

  }
}
