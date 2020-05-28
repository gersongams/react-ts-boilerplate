import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./../index";
import { RootState } from "./index";

interface GlobalState {
  value: number;
  name: string;
  isLoading: boolean;
  error: string | null;
}

let initialState: GlobalState = {
  value: 0,
  name: "",
  isLoading: false,
  error: null,
};

interface IncrementResult {
  value: number;
  name: string;
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    getIncrementStart(state) {
      state.isLoading = true;
    },
    increment(state) {
      state.value += 1;
      state.isLoading = false;
      state.error = null;
    },
    decrement(state) {
      state.value -= 1;
      state.isLoading = false;
      state.error = null;
    },
    incrementByAmount(state, action: PayloadAction<IncrementResult>) {
      const { value, name } = action.payload;
      state.value += value;
      state.name = name;
      state.isLoading = false;
      state.error = null;
    },
    incrementFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export const incrementAsync = (value: number, name: string): AppThunk => async (
  dispatch
) => {
  setTimeout(() => {
    dispatch(incrementByAmount({ value, name }));
  }, 1000);
};

export const selectCount = (state: RootState) => state.global.value;

export default globalSlice.reducer;
