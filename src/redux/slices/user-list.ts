import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const users = await client.get('user');
  return users?.data?.data;
});

const initialState: any = {
  data: [],
  hasError: false,
  isLoading: false,
};

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export default userListSlice.reducer;
