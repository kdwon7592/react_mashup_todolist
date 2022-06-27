import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

const TodoList = ({ todoItemArray, removeTodoItem, checkDoneItem }) => {
    const TodoItemArrayList = todoItemArray.map(todoItemAttr => {
        return (
            <TodoItem
                text={todoItemAttr.text}
                done={todoItemAttr.done}
                key={todoItemAttr.id}
                id={todoItemAttr.id}
                removeTodoItem={removeTodoItem}
                checkDoneItem={checkDoneItem}
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