import { AuthGuard } from './../../shared/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentsListComponent } from './students-list.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { HeaderComponent } from '../header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from 'src/app/shared/services/student.service';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/store';
import { StudentssEffect } from 'src/app/store/effects/students.effect';
import { EffectsModule } from '@ngrx/effects';
import { NotfouundComponent } from '../notfouund/notfouund.component';



@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentsListComponent,
    AllDetailsComponent,
    HeaderComponent,
    NotfouundComponent 

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgbModule,
    FormsModule,HttpClientModule
    ,StoreModule.forRoot(reducers)
    , EffectsModule.forRoot([StudentssEffect]),
  ],
  providers:[
    StudentService
  ]
})
export class StudentModule { }
