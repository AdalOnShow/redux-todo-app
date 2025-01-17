import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store/todoSlice";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch();


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    if (savedTodos.length > 0) {
      savedTodos.forEach((todo) => {
        dispatch({
          type: "todos/loadFromStorage",
          payload: todo
        })
      })
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

}

export default TodoApp;