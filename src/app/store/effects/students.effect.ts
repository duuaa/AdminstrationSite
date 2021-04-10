
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//rxjs
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
//services
import { StudentService } from 'src/app/shared/services/student.service';
//actions
import { LOAD ,SuccessAction, FailedAction } from '../actions/student.action';

@Injectable()
export class StudentssEffect {

   
    student$ = createEffect(() => this.actions.pipe(
        ofType(LOAD),
        mergeMap(() => this.http.get(`https://reqres.in/api/users?page=${this.studentService.getpageNumber()}&per_page=${this.studentService.getnumberofstudent()}`)
        .pipe(
            map((res) => 
            new SuccessAction(res)), catchError((err) => of(new FailedAction(err)))

        ))
    ));

    constructor(private http: HttpClient, private actions: Actions, private studentService:StudentService) { }
}