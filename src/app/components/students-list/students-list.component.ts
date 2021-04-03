import { Student } from './../../store/reducers/students.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StoreInterface } from 'src/app/store/store';
import { LoadStudentsAction } from '../../store/actions/student.action';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  numberOfStudents:number=3;
  students:StoreInterface;
  constructor(private store: Store<StoreInterface>, private authservice: AuthService) { }

  ngOnInit(): void {
    this.numberOfStudents=3;
    this.store.dispatch(new LoadStudentsAction());
    this.store.subscribe(data => this.students = data);
  }

}
