import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  pageNumber: BehaviorSubject<any> = new BehaviorSubject(1);
  per_page: BehaviorSubject<any> = new BehaviorSubject(3);
  studentId: BehaviorSubject<any> = new BehaviorSubject(0);
  constructor() { }
  
  setPageNumber(num: Number) {
    this.pageNumber.next(num);
  }
  setStudentperPageNumber(num: Number) {
    this.per_page.next(num);
  }
  getpageNumber() {
    return this.pageNumber.value;
  }
  getnumberofstudent() {
    return this.per_page.value;
  }
  getId() {
    return this.studentId.value;
  }
  setId(id: Number) {
    this.studentId.next(id)

  }
}
