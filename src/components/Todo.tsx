import React, { useState } from "react";

// interface TodoState  {
// 	text:string;
// 	isDone:boolean;
// }

export const Todo: React.FC = () => {
  const [todos, setTodo] = useState([
    { text: "do my homework", isDone: false }
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    const temp = {
      text: newTodo,
      isDone: false
    };
    setTodo((oldState) => [...oldState, temp]);
  };
  const markAsDone = (textTemp: string) => {
    const updateTodos = todos.map((item) => {
      const { text, isDone } = item;
      if (item.text === textTemp) {
        return {
          text,
          isDone: true
        };
      }
      return item;
    });
    setTodo(updateTodos);
  };
  return (
    <div>
      <h3>TODO LIST</h3>
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      <div>
        <ul>
          {todos.map((item) => (
            <li key={item.text} onClick={() => markAsDone(item.text)}>
              {item.isDone ? `${item.text}✅` : item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
