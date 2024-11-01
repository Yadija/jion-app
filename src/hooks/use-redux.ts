import { useDispatch, useSelector } from "react-redux";

// states
import type { AppDispatch, RootState } from "../states";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
