import { ActionReducerMap } from '@ngrx/store';
import { Student ,StudentReducer } from './reducers/students.reducer';

export interface StoreInterface {
    page:Number,
    per_page:Number,
    total:Number,
    total_pages:Number,
    data: Student[],
    support:{
        url:string,
        text:string
    }  
} 
export interface CustomAction {
    type: string,
    payload: any
}
export const reducers: ActionReducerMap<any> = {
    students: StudentReducer,

}
