import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
 //services
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanLoad {
  userInfo: any;
  constructor(private route: Router, private authService: AuthService) {}
  canActivate(): boolean {
    if (!localStorage.getItem) {
      this.route.navigateByUrl('');
      return false;
    }
    return true;


  }
  canLoad(): boolean {
    if (!localStorage.getItem) {
      this.route.navigateByUrl('');
      return false;
    }
    return true;

  }
}

