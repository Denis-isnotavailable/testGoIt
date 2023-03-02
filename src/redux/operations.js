import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase/config";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        try {            
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = [];
    
            querySnapshot.forEach((doc) => {
                users.push({ id: doc.id, ...doc.data() });
            });          
    
            return users;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
  }
);