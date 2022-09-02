import { TodoActionType } from "../shared/todo-action-types.enum";
import { ActionParent } from "../actions/todo.actions";
import { Todo } from "../models/Todo";


const initialState: Todo[] = [ 
{title:"Titile demo 1"},
{title:"Titile demo 2"},
{title:"Titile demo 3"}
];

export function TodoReducer(state= initialState , action:ActionParent){
    switch(action.type){
        default: return state;
    }
}