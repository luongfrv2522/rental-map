import {configureStore} from "@reduxjs/toolkit";
import pageLoadingReducer from "@/store/loadDataSlice";
import notifyReducer from "@/store/notifySlice";

export const store = configureStore({
  reducer: {
    pageLoading: pageLoadingReducer,
    notify: notifyReducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;