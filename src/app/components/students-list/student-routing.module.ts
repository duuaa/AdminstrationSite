import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDetailsComponent } from './all-details/all-details.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsListComponent } from './students-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  
    //canActivate: [AuthGuard]
  
  
  },

  {
    path: 'all_details',
    component: AllDetailsComponent,
  
    //canActivate: [AuthGuard]
  
  
  },
  {
    path: 'all_details/profile',
    component: StudentProfileComponent,
    //canActivate: [AuthGuard]
  
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
