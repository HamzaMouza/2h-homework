//import { Action } from '@ngrx/store';
import { Ticket } from 'src/interfaces/ticket.interface';
import * as ticketActions from '../action/ticket.action';

export type Action = ticketActions.All;

const defaultState: Ticket = {
    id: 1,
    completed: false,
    assigneeId: 111,
    description: 'default Ticket'
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function ticketReducer(state: string = 'Hllo', action: Action) {
    console.log(action.type, state);

    switch(action.type) {
        case ticketActions.ADD:
            return newState(state, { description: "new" });
            
        case ticketActions.FILTER:
            return newState(state, { description: "FILTER" });

        case ticketActions.ASSIGN:
            return newState(state, { description: "ASSIGN" });
            
        case ticketActions.COMPLETE:
            return newState(state, { description: "COMPLETE" });

        default:
            return state;

    }
}