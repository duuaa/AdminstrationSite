import { ActionReducerMap } from '@ngrx/store';
import { Student ,StudentReducer } from './reducers/students.reducer';

export interface StoreInterface {
   students: Student[]
}

 
export interface CustomAction {
    type: string,
    payload: any
}
export const reducers: ActionReducerMap<StoreInterface> = {
    students: StudentReducer
}