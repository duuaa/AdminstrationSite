import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { StudentService } from './../../shared/services/student.service';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { LoadStudentsAction } from 'src/app/store/actions/student.action';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  cond: boolean = false;
  data: any;
  pageNumber: number;
  per_page: number;
  students: any;
  inststudents: any;

  items: any[] = [
    { id: 1, name: 3 },
    { id: 2, name: 6 },
    { id: 3, name: 9 },
    { id: 4, name: 12 },
  ];

  selected: number = 3;

  pageCount: number = 1;
  previousCond: boolean = true;
  nextCond: boolean = false;
  first: boolean = true;

  constructor(private studentService: StudentService, private authService: AuthService, private store: Store<StoreInterface>, private router:Router) {
    this.studentService.setPageNumber(this.pageCount);
    this.studentService.setStudentperPageNumber(this.selected);
    this.store.dispatch(new LoadStudentsAction());
    this.store.subscribe((data) => {
      this.data = data;
      this.students = this.data.students;
      this.cond = true;
    });
  }

  ngOnInit(): void {

  }

  selectOption(id: number) {
    this.pageCount = 1;
    this.previousCond = true;
    this.nextCond = false;
    this.studentService.setPageNumber(this.pageCount);

    this.studentService.setStudentperPageNumber(this.selected);
    this.store.dispatch(new LoadStudentsAction());
  }
  nextClicked() {
    this.previousCond = false;
    if (this.selected >= 6) {
      if (this.pageCount == 2) {
        console.log("page" + this.pageCount)
        this.nextCond = true;

      } else {
        this.pageCount += 1;
        this.studentService.setPageNumber(this.pageCount);
        this.store.dispatch(new LoadStudentsAction());
      }

    } else {
      if (this.pageCount < (12 / this.selected)) {

        this.pageCount += 1;

      }
      if (this.pageCount == (12 / this.selected)) {
        this.nextCond = true;
      }

      this.studentService.setPageNumber(this.pageCount);
      this.store.dispatch(new LoadStudentsAction());


    }

  }
  previousClicked() {
    this.nextCond = false;
    this.pageCount -= 1;
    this.previousCond = false;
    this.studentService.setPageNumber(this.pageCount);
    this.store.dispatch(new LoadStudentsAction());
    if (this.pageCount == 1) {
      this.previousCond = true;
    }
  }
  parseid(student){
    this.studentService.setId(student.id);
    this.router.navigate['profile']; 
  }


}







