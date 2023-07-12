import { createSlice } from "@reduxjs/toolkit"

interface ITask{
  title: string,
  description: string,
  id: string
}

const initialState: ITask[] = [{
  title: '',
  description: '',
  id: '',
}]

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
  }
})

export default todoSlice.reducer;