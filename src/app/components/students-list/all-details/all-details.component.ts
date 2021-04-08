import { Route, Router } from '@angular/router';
import { StudentService } from './../../../shared/services/student.service';

import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { LoadStudentsAction } from 'src/app/store/actions/student.action';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {

  constructor(private studentService: StudentService, private store: Store<StoreInterface>,private router:Router) {
 
  }
  data: any;
  allstudents: any
  cond: boolean = false;
  ngOnInit(): void {
    this.studentService.setStudentperPageNumber(12);
    this.store.dispatch(new LoadStudentsAction());
    this.store.subscribe((data) => {
      this.data = data;
      this.allstudents = this.data.students;
      this.cond = true;
    });
  }

  parseid(student){
    console.log(student,"parse id")
    this.studentService.setId(student.id);
    console.log(student,"parse id")
    this.router.navigate(['profile']);
  }

}


