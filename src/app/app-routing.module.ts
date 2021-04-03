import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard]
    // loadChildren: () => import('./login/login.module').then(_ => _.LoginModule),


  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard]
    // loadChildren: () => import('./login/login.module').then(_ => _.LoginModule),


  }
  // { path: 'search', component: SearchComponent, canActivate: [AuthRouteGaurd] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
