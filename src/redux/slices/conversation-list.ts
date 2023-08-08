import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';

export const fetchConversations = createAsyncThunk(
  'fetchConversations',
  async () => {
    const userID = localStorage.getItem('userID');
    const conversations = await client.get(`user/${userID}/conversation`);

    return conversations?.data?.data;
  }
);

const initialState: any = {
  data: [],
  hasError: false,
  isLoading: false,
};

export const conversationListSlice = createSlice({
  name: 'conversationList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConversations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchConversations.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchConversations.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export default conversationListSlice.reducer;
