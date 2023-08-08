import { configureStore } from '@reduxjs/toolkit';

import conversations from './slices/conversation-list';
import messages from './slices/message-list';
import users from './slices/user-list';
import selectedUser from './slices/selected-user';
import lastMessage from './slices/create-message';

export const store = configureStore({
  reducer: {
    conversations,
    messages,
    users,
    selectedUser,
    lastMessage,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
