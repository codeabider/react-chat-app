import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';

export const postConversation = createAsyncThunk(
  'postConversation',
  async ({ newUserID }: any) => {
    const userID = localStorage.getItem('userID');
    const conversation = await client.post(`user/${userID}/conversation`, {
      user_ids: [newUserID],
    });

    return conversation?.data?.data;
  }
);

const initialState: any = {
  data: [],
  hasError: false,
  isLoading: false,
};

export const newConversationSlice = createSlice({
  name: 'newConversation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postConversation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postConversation.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(postConversation.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export default newConversationSlice.reducer;
