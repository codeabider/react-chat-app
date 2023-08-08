import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  selectedUser: {},
};

export const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState,
  reducers: {
    updateSelectedUser: (state, { payload }) => {
      state.selectedUser = payload;
    },
  },
});

export const { updateSelectedUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
