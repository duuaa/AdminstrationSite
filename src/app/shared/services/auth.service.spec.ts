import { Route } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let auth: AuthService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(AuthService);
 auth = new AuthService(new Router());
  });
  afterEach(()=>{
    localStorage.removeItem('token');
  })
  it('must return true if there is a token in localstorage', () => {
    expect(auth.login).toBeTruthy();
  });
  it('must return false if there is no token in localstorage', () => {
    expect(auth.login).toBeFalsy();
  });
});
