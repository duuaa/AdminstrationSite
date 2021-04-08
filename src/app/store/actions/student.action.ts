export const SUCCESS = '[students] success';
export const FAILED = '[students]  failed';
export const LOAD = '[students] load';

export class LoadStudentsAction {
    type: string = LOAD;

}

export class SuccessAction {
    type: string = SUCCESS;
    payload: any;

    constructor(payload: any) {
        this.payload = payload.data;
    }

}

export class FailedAction {
    type: string = FAILED;
    payload: any;

    constructor(payload: any) {
        this.payload = payload;
    }

}