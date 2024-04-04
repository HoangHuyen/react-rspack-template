import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { typedName, dotPrefixer } from "@src/libs/types";

const PING_MACHINE = "127.0.0.1"; // to be moved in env file
export const name = typedName("auth");
export const thunkName = dotPrefixer(name);
const GET_IP = typedName("getIP");

export const actions = {
  [GET_IP]: createAsyncThunk(thunkName(GET_IP), async (_, { dispatch }) => {
    try {
      dispatch(setIP(""));
    } catch (error) {
      console.error("Failed to run command", error);
    }
  }),
};

export const slice = createSlice({
  name: name,
  initialState: {
    ip: null as string | null,
  },
  reducers: {
    setIP: (state, { payload }: PayloadAction<string>) => {
      state.ip = payload;
    },
  },
});

export const { setIP } = slice.actions;

export const mutates = slice.actions;
