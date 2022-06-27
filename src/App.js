import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

// 할 일 정리 : 

// 1. 투두 아이템 어레이 데이터 받아서 출력
// 2. 삭제 기능 구현




const App = () => {

  const [undoneCount, setUndoneCount] = useState(0);
  const [keyCount, setKeyCount] = useState(0);
  const [todoItemArray, setTodoItemArray] = useState([]);

  // 했는지 여부 체크
  const checkUndoneCount = () => {
    console.log("checkUndoneCount");

    let count = 0;
    todoItemArray.forEach(item => {
      if (!item.done) {
        count++;
      }
    });
    setUndoneCount(count);
  };

  useEffect(() => {
    checkUndoneCount();
  }, [todoItemArray])


  // 할 일 추가
  const onGetResult = (value) => {
    console.log(value);

    const newItem = {
      text: value,
      done: false,
      id: keyCount,
    }

    const nextTodoItemArray = [...todoItemArray, newItem];
    setTodoItemArray(nextTodoItemArray);

    setKeyCount((prev) => {
      const nextCount = prev + 1;
      return nextCount;
    });
  }

  // 할 일 삭제
  const removeTodoItem = (id) => {
    console.log("remove id : " + id);

    setTodoItemArray((prevTodoItemArray) => {
      const removeTodoItemArray = prevTodoItemArray.filter(item => id !== item.id);
      return removeTodoItemArray;
    });
  };

  const checkDoneItem = (id) => {
    console.log("check done id : " + id);

    const checkTodoItemArray = todoItemArray.map(
      item => {
        if (id === item.id) {
          item.done = !item.done;
        }
        return item;
      });
    setTodoItemArray(checkTodoItemArray);
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead undoneCount={undoneCount} />
        <TodoList todoItemArray={todoItemArray} removeTodoItem={removeTodoItem} checkDoneItem={checkDoneItem} />
        <TodoCreate onGetResult={onGetResult} />
      </TodoTemplate>
    </>
  );
}

export default App;
