import { Action } from '@ngrx/store';


export function userReducer(state: string = 'Hllo', action: Action) {
    console.log(action.type, state)
}