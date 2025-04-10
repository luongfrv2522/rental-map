// redux/notifySlice.ts
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface NotifyState {
  list: NotifyStateItem[];
}
export interface NotifyStateItem { title: string; content: string }

const initialState: NotifyState = { list: [] };

const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotifyStateItem>) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { addNotification } = notifySlice.actions;
export default notifySlice.reducer;