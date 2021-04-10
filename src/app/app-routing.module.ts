import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AllDetailsComponent } from './components/students-list/all-details/all-details.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { MainGuard } from './shared/guards/main.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    
  },
  {
    path: 'student_list',
    loadChildren: () => import('./components/students-list/student.module').then(_ => _.StudentModule),
    canLoad :[MainGuard ]


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
