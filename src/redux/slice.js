import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from './operations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoadingUsers: false,
    errorUsers: null
  },
  extraReducers: builder => {
    builder      
      .addCase(fetchUsers.pending, (state) => {
        state.isLoadingUsers = true;              
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoadingUsers = false;
        state.errorUsers = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoadingUsers = false;
        state.errorUsers = action.payload;    
      })
      
  },
});

export const usersReducer = usersSlice.reducer;