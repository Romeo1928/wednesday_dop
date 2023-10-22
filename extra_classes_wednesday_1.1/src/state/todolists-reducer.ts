import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from "../App";

// 1-й способ
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>

// 2-й способ
// export type AddTodolistActionType = {
//     type: 'ADD-TODOLIST',
//     title: string,
//     todolistId: string
// }



type ActionsType = AddTodolistActionType

const initialState: Array<TodolistType> =  []

export const todolistsReducer = (state: Array<TodolistType> = initialState, action: ActionsType): Array<TodolistType> => {
    // debugger
    switch (action.type) {
        case "ADD-TODOLIST": {
            // debugger
            return [{
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }, ...state]
        }
        default:
            return state;
    }
}

// 1-й способ
export const addTodolistAC = (title: string) => ({ type: 'ADD-TODOLIST', title: title, todolistId: v1()}) as const

// 2-й способ
// export const addTodolistAC = (title: string): AddTodolistActionType => {
//     return {type: 'ADD-TODOLIST', title: title, todolistId: v1()}
// }
