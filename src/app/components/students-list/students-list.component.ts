import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
//services
import { StudentService } from '../../shared/services/student.service';
//NGRX
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { LoadStudentsAction } from 'src/app/store/actions/student.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit,OnDestroy {

  selected: number = 3;
  pageCount: number = 1;
  students: any;
  data: any;
  response: any;
  responseSub: Subscription;
  previousCond: boolean = true;
  nextCond: boolean = false;
  cond: boolean = false;
  items: any[] = [
    { id: 1, name: 3 },
    { id: 2, name: 6 },
    { id: 3, name: 9 },
    { id: 4, name: 12 },
  ];
  constructor(private studentService: StudentService, private store: Store<StoreInterface>,private authService:AuthService) {
    this.studentService.setPageNumber(this.pageCount);
    this.studentService.setStudentperPageNumber(this.selected);
    this.store.dispatch(new LoadStudentsAction());
    this.responseSub=this.store.subscribe((students) => {
      this.data = students;
      this.response = this.data.students
    });

  }
  ngOnDestroy(): void {
    if(this.authService.logoutCond.getValue()){
      this.responseSub.unsubscribe();
    }
  }

  ngOnInit(): void { }

  selectOption(id: number) {
    this.pageCount = 1;
    this.previousCond = true;
    this.nextCond = false;
    this.studentService.setPageNumber(this.pageCount);
    this.studentService.setStudentperPageNumber(this.selected);
    this.store.dispatch(new LoadStudentsAction());
  }
  nextClicked() {
    
    if (this.response.total && this.response.page && this.response.per_page && this.response.total_pages) {
      this.previousCond = false;
      if (this.pageCount < this.response.total_pages) {
        this.pageCount += 1;
        this.studentService.setPageNumber(this.pageCount);
        this.store.dispatch(new LoadStudentsAction());
      } else{
        this.nextCond = true;
      }
    }
  }
  previousClicked() {
    if (this.response.total && this.response.page && this.response.per_page && this.response.total_pages) {
      this.nextCond = false;
      this.pageCount -= 1;
      this.previousCond = false;
      this.studentService.setPageNumber(this.pageCount);
      this.store.dispatch(new LoadStudentsAction());
      if (this.pageCount == 1) {
        this.previousCond = true;
      }
    }

  }

  //parse the cuurent student to service to make it availble to another component
  parseid(student) {
    this.studentService.setId(student.id);
  }


}







