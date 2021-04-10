import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
 //services
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userInfo: any;
  constructor(private route: Router, private authService: AuthService) {}
  canActivate(): boolean {
    if (!this.authService.auth_contion) {
      this.route.navigateByUrl('');
      return false;
    }
    return true;

  }
}

