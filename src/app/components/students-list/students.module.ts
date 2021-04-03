import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { StudentsListComponent } from './students-list.component';
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule,
	IgxButtonGroupModule
 } from "igniteui-angular";



@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentsListComponent,
    AllDetailsComponent
  ],
  imports: [
    CommonModule,
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule,
	IgxButtonGroupModule
  ]
})
export class StudentsModule { }
