import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';

export const postMessage = createAsyncThunk(
  'postMessage',
  async ({ conversationID, text }: any) => {
    // comment lines 8-14 and uncomment lines 15-20 to view const msg sent
    const userID = localStorage.getItem('userID');
    const message = await client.post(
      `user/${userID}/conversation/${conversationID}/message`,
      { text }
    );

    return message?.data?.data;
    // return {
    //   id: new Date().toISOString(),
    //   user_id: 1,
    //   text,
    //   sent_at: '2021-07-21T08:08:45.000000Z',
    // };
  }
);

const initialState: any = {
  lastMessage: {},
  hasError: false,
  isLoading: false,
};

export const newMessageSlice = createSlice({
  name: 'newMessage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postMessage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.lastMessage = payload;
    });
    builder.addCase(postMessage.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export default newMessageSlice.reducer;
