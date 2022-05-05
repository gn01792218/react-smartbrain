// app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import routeReducer from './route'  //引入reducer
import userReducer from './user'
// ...其他reducer略
const store = configureStore({
  reducer: {
    route: routeReducer,
    user:userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store