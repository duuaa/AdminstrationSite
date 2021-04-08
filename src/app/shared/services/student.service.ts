import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { LoadStudentsAction } from 'src/app/store/actions/student.action';
import { StoreInterface } from 'src/app/store/store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: StoreInterface;
  pageNumber: BehaviorSubject<any> = new BehaviorSubject(1);
  per_page: BehaviorSubject<any> = new BehaviorSubject(3);
  studentId: BehaviorSubject<any> = new BehaviorSubject(0);
  allStudents:any;
  condition:boolean;
  student:any;
  constructor(private http:HttpClient,private route:Router) {


  }


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
  setAllStudents(studentsFromAPI, cond:boolean){
    if(!cond){
      this.condition=!cond;
      this.allStudents=studentsFromAPI;
    }
  }
  getAllStudents(){
    if(this.condition){
      return this.allStudents;
    }
   
  }
  getById():any {
     this.http.get<any>(`https://reqres.in/api/users/${this.studentId.value}`).subscribe((data)=>{
       console.log("dataaaaaaaa"+data)
       this.student=data.data;
     });
     return this.student;
   }
   setId(id:Number) {
    this.studentId.next(id);
    
       
   }
}
