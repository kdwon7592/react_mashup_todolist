import React, { useContext } from "react";
import styled from "styled-components";
import { TodoStateContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

const TodoList = () => {
    const todos = useContext(TodoStateContext);

    const TodoItemArrayList = todos.map(todoItemAttr => {
        return (
            <TodoItem
                text={todoItemAttr.text}
                done={todoItemAttr.done}
                key={todoItemAttr.id}
                id={todoItemAttr.id}
            >
            </TodoItem>
        )
    });

    return (
        <TodoListBlock>
            {TodoItemArrayList}
        </TodoListBlock>
    );
}

export default TodoList;