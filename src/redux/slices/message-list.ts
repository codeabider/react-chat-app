import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';

import { messageList } from '../../../public/mocks/message-list';

export const fetchMessages = createAsyncThunk(
  'fetchMessages',
  async ({ conversationID }: any) => {
    // comment lines 10-15 and uncomment line 16 to view const msg list
    const userID = localStorage.getItem('userID');
    const messages = await client.get(
      `user/${userID}/conversation/${conversationID}/message`
    );

    return messages?.data?.data;
    // return messageList?.data;
  }
);

const initialState: any = {
  data: [],
  hasError: false,
  isLoading: false,
};

export const messageListSlice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    updateMessageList: (state, { payload }) => {
      state.data.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = [...payload].reverse();
    });
    builder.addCase(fetchMessages.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
      state.hasError = true;
      state.data = [];
    });
  },
});

export const { updateMessageList } = messageListSlice.actions;

export default messageListSlice.reducer;
