import { createAsyncThunk as createReduxAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch, RootState } from "./store";

export const createAsyncThunk = createReduxAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();
