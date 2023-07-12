import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IToDo } from '@interfaces';

const initialState: IToDo[] = [];

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addAllTodos: (state, action: PayloadAction<IToDo[]>) => {
			state.push(...action.payload);
		},
		addTodo: (state, action: PayloadAction<IToDo>) => {
			state.push(action.payload);
			localStorage.setItem('todos', JSON.stringify(state));
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			const index = state.findIndex((item) => item.id === action.payload);
			if (index !== -1) {
				state.splice(index, 1);
				localStorage.setItem('todos', JSON.stringify(state));
			}
		},
		editTodo: (state, action: PayloadAction<IToDo>) => {
			const index = state.findIndex((item) => item.id === action.payload.id);
			if (index !== -1) {
				state[index] = action.payload;
				localStorage.setItem('todos', JSON.stringify(state));
			}
		},
		toggleCheckboxTodo: (state, action: PayloadAction<string>) => {
			const index = state.findIndex((item) => item.id === action.payload);
			if (index !== -1) {
				state[index].isDone = !state[index].isDone;
				localStorage.setItem('todos', JSON.stringify(state));
			}
		},
	},
});

export const {
	addTodo,
	deleteTodo,
	editTodo,
	addAllTodos,
	toggleCheckboxTodo,
} = todoSlice.actions;

export const todoReduser = todoSlice.reducer;
