import { configureStore } from "@reduxjs/toolkit";
import  todoReduser  from "../redusers/todoSlice";

export const store = () => {
  return configureStore({
    reducer: todoReduser,
  });
};