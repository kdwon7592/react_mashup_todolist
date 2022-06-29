import React, { createContext, useReducer, useRef } from "react";

const intitalTodos = [
    {
        id: 1,
        text: "프로젝트 생성하기",
        done: true,
    },
    {
        id: 2,
        text: "컴포넌트 스타일링하기",
        done: true,
    },
    {
        id: 3,
        text: "Context 만들기",
        done: false,
    }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
export const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, intitalTodos);
    const nextId = useRef(intitalTodos.length + 1);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};