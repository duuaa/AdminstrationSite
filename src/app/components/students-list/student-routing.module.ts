import { MainGuard } from './../../shared/guards/main.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AllDetailsComponent } from './all-details/all-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsListComponent } from './students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
    ,canActivate: [AuthGuard]
  },

  {
    path: 'all_details',
    component: AllDetailsComponent,
  
    canActivate: [AuthGuard]
  
  
  },
  {
    path: 'profile',
    component: StudentProfileComponent,
    canActivate: [AuthGuard]
  
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
