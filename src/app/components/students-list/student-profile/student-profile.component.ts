
import { Component, OnInit } from '@angular/core';
//animation
import { flyInOut,  expand } from 'src/app/shared/animations/app.animation';
//services
import { SingleStudentService } from 'src/app/shared/services/single-student.service';
import { StudentService } from 'src/app/shared/services/student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
   host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations: [
    flyInOut(),
    expand()
    
  ]    
})
export class StudentProfileComponent implements OnInit {

  //inject services
  constructor(private studentServices: StudentService, private singleStudentService: SingleStudentService) { }

  student: any;
  id:number;
  ngOnInit(): void {
    //get the student data from single-student service with getting the id from th student service
    this.id=this.studentServices.getId();
    this.singleStudentService.setUserId(this.id);
    this.student = this.singleStudentService.getById(this.singleStudentService.userId.value).toPromise().then(
      data => {
        this.student = data.data
      });;
  }

}
