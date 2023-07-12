import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { IToDo } from "../../interfaces/ITodo";

const initialState: IToDo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<IToDo>
    ) => {
      state.push(action.payload);
    },
    deleteTodo: (
      state,
      action: PayloadAction<string>
    ) => {
      state.filter(
        (item: IToDo) =>
          item.id !== action.payload
      );
    },
    editTodo: (
      state,
      action: PayloadAction<IToDo>
    ) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
