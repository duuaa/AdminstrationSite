import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  },
  {
    path: 'student_list',
    loadChildren: () => import('./components/students-list/student.module').then(_ => _.StudentModule),
    canLoad :[AuthGuard ]


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
