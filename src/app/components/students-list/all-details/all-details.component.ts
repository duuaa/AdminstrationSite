import { Component, OnInit, AfterViewChecked} from '@angular/core';
//services
import { StudentService } from '../../../shared/services/student.service';
//NGRX
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { LoadStudentsAction } from 'src/app/store/actions/student.action';
//animation
import { expand, flyInOut } from 'src/app/shared/animations/app.animation';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css'],
  host:{
    '[@flyInOut]':'true',
    'style':'display:block;'
  },
  animations:[
    flyInOut(),
    expand()
  ]
})
export class AllDetailsComponent implements OnInit {
  data: any;
  response: any
  students: any;
  cond: boolean = false;

  constructor(private studentService: StudentService, private store: Store<StoreInterface>) {
    //dispatch the all student from the store.
    this.studentService.setStudentperPageNumber(12);
    this.store.dispatch(new LoadStudentsAction());
    this.store.subscribe((students) => {
      this.data = students;
      this.response = this.data.students
    });
  }

  
  ngOnInit(): void { }

  //parse the cuurent student to service to make it availble to another component
  parseid(student) {
    this.studentService.setId(student.id);
  }

}


