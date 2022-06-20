import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

const TodoList = ({ TodoItemArray }) => {
    const TodoItemArrayList = TodoItemArray.map(todoItemAttr => {
        return <TodoItem text={todoItemAttr.text} done={todoItemAttr.done}></TodoItem>
    });
    return (
        <TodoListBlock>
            {TodoItemArrayList}
        </TodoListBlock>
    )
}

export default TodoList;