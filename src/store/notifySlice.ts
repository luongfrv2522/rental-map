// redux/notifySlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NotifyState {
  list: { title: string; content: string }[];
}

const initialState: NotifyState = { list: [] };

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<{ title: string; content: string }>) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { addNotification } = notifySlice.actions;
export default notifySlice.reducer;