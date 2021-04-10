// import { HttpClientModule } from '@angular/common/http';
// import { TestBed, waitForAsync } from '@angular/core/testing';
// import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from '../services/auth.service';

// import { AuthGuard } from './auth.guard';
// class MockActivatedRouteSnapshot {
//     private _data: any;
//     get data(){
//        return this._data;
//     }
//   }
  
//   let mockRouterStateSnapshot : RouterStateSnapshot;
// describe('AuthGuard', () => {
//     let authGuard: AuthGuard;
//     let route: ActivatedRouteSnapshot;
 
//     let mockRouter: any;  
  
//     beforeEach(() => {
//       mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  
//       TestBed.configureTestingModule({
//         imports: [
//           HttpClientModule,
//         //   RouterTestingModule.withRoutes({route})
//         ],
//         providers: [
//           AuthGuard,
//           AuthService,
//           { provide: ActivatedRouteSnapshot, useClass: MockActivatedRouteSnapshot},
//           { provide: Router, useValue: mockRouter},
//         ]
//     });

// });
// });