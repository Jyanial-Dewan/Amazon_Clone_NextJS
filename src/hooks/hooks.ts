import { AppDispatch, RootState } from "@/store/store";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// 👇 Use these instead of plain `useSelector` and `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
