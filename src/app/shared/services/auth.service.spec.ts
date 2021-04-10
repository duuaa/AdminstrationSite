//components
import { StudentsListComponent } from './../../components/students-list/students-list.component';
import { HeaderComponent } from './../../components/header/header.component';

import { TestBed, waitForAsync } from '@angular/core/testing';
//services
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let component: HeaderComponent;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'student_list', component: StudentsListComponent }])
      ]
    });
    service = TestBed.inject(AuthService);
    component = new HeaderComponent(service);
  }));
  it('should be called logout function', () => {
    spyOn(service, 'logout').and.callFake;
    component.dologout();
    expect(service.logout).toHaveBeenCalled();
  });
  it('must return true if the user is the admin', () => {
    expect(service.login("admin", "1234")).toBeTruthy();
  });
  it('must return false if the user does not has access to login ', () => {
    expect(service.login("any", "any")).toBeFalsy();
  });
});


