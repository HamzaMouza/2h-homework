import { Action } from '@ngrx/store';


export function postReducer(state: string = 'Hllo', action: Action) {
    console.log(action.type, state)
}