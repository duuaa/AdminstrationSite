import { CustomAction } from '../store';
import { SUCCESS, FAILED } from '../actions/student.action';

export interface Student {
    id: number,
    email: string,
    first_name: string,
    last_name:string,
    avatar:string
}
export function StudentReducer(state: Student[], action: CustomAction) {
    switch (action.type) {
        case SUCCESS:
            return action.payload;
        case FAILED:
            console.log('error-------', action.payload);
            return state;

    }
}