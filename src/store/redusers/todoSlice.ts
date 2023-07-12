import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IToDo{
  todo: string,
  id: string
}

const initialState: IToDo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<IToDo>) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.filter((item: IToDo) => item.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<IToDo>) => {
      state.map((item: IToDo) => item.id !== action.payload.id ? action.payload : item)
    }
  }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;