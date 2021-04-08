import { ActionReducerMap } from '@ngrx/store';
import { Student ,StudentReducer } from './reducers/students.reducer';

export interface StoreInterface {
    
    data: {
        students: Student[]
      }
   
}

 
export interface CustomAction {
    type: string,
    payload: any
}
export const reducers: ActionReducerMap<any> = {
    students: StudentReducer,

}
