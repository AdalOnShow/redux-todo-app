import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)

      id(todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    }
  })