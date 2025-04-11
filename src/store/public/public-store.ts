import {configureStore} from "@reduxjs/toolkit";
import pageLoadingReducer from "@/store/page-loading-slice";
import notifyReducer from "@/store/notify-slice";
import {store} from "next/dist/build/output/store";

export const publicStore = configureStore({
  reducer: {
    pageLoading: pageLoadingReducer,
    notify: notifyReducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the publicStore itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default publicStore;