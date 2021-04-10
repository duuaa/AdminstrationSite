
import { BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SingleStudentService {
    student: any;
    userId: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {

  }
  getById(id: number): Observable<any> {
    //get the data from api url
    console.log(this.http.get<object>(`https://reqres.in/api/users/3`).subscribe(value=>console.log(value)));
    return this.http.get<object>(`https://reqres.in/api/users/${id}`);

  }
  getUserId(){
    return this.userId.value;
  }
  setUserId(id:number){
    this.userId.next(id);
  }
}
