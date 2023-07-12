import { configureStore } from '@reduxjs/toolkit';
import { todoReduser } from '../';

export const store = () => {
	return configureStore({
		reducer: todoReduser,
	});
};
