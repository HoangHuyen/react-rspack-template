import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  shallowEqual,
} from "react-redux";
export { createSelector } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { slice as auth } from "@src/model/slices/auth";

const reducer = {
  [auth.name]: auth.reducer,
};

export let store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: {},
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const rootSelector = (state: RootState) => state;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = (
  selector,
  equalityFn = shallowEqual
) => useReduxSelector(selector, equalityFn as any);
