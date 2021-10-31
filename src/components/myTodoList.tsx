import React from "react";
import { Todo } from "./Todo";
import { useParams } from "react-router";

export const MyTodoList = () => {
  const params = useParams();
  console.log(params);
  return <Todo />;
};
