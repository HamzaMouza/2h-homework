import { Action } from '@ngrx/store';

export const ADD = "add";
export const FILTER = "filter";
export const ASSIGN = "assign";
export const COMPLETE = "complete";


export class AddTicket implements Action {
    readonly type = ADD;
}
export class FilterTicket implements Action {
    readonly type = FILTER;
}
export class AssignTicket implements Action {
    readonly type = ASSIGN;
}
export class CompleteTicket implements Action {
    readonly type = COMPLETE;
}

export type All
    = AddTicket
    | FilterTicket
    | AssignTicket
    | CompleteTicket;