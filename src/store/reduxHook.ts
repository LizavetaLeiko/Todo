import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import  todoReduser  from "./redusers/todoSlice";

export type RootState = ReturnType<typeof todoReduser>;
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;