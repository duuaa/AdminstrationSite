import { Injectable } from '@angular/core';
import {  Router, CanLoad } from '@angular/router';
//services
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanLoad {

  constructor(private route: Router, private authService: AuthService) {

  }
  canLoad(): boolean {
    if (!this.authService.auth_contion) {
      this.route.navigateByUrl('');
      return false;
    }
    return true;

  }
}





