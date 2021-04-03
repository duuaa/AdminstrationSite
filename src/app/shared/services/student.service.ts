import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  page: BehaviorSubject<any> = new BehaviorSubject(1);
  per_page: BehaviorSubject<any> = new BehaviorSubject(3);
  constructor() { }
}
