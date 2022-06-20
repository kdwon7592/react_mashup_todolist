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

function App() {
  console.log('test');
  const [undoneCount, setUndoneCount] = useState(0);
  const [todoItemArray, setTodoItemArray] = useState([
    {
      text: '프로젝트 생성하기', // 할 일
      done: false, // 완료 여부
      id: 0,
    },
  ]);

  // useEffect(() => {
  // const tempArray = (...todoItemArray);
  // TodoItemArray.forEach(itemAttr => {
  //   let count = undoneCount;
  //   if (!itemAttr.done) {
  //     count = count + 1;
  //     setUndoneCount(count);
  //   }
  // })
  // }, [])

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead undoneCount={undoneCount} />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
