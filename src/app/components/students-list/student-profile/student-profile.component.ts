import { StudentService } from 'src/app/shared/services/student.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
 
  constructor(private studentServices:StudentService) { }
  student:any
  ngOnInit(): void {
   this.student= this.studentServices.getById();
  }

}
