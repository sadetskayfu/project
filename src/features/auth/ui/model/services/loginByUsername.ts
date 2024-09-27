import { createAppAsyncThunk } from "@/app/providers/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "@/entities/User";
import axios from 'axios'

interface LoginData {
    username: string
    password: string
}

export const loginByUsername = createAppAsyncThunk<User, LoginData>(
    'auth/loginByUsername',
    async (loginData: LoginData, thunkApi) => {
        
        try {
            const response = await axios.post<User>('http://localhost:8000/login', loginData)
            debugger

            if (response.data == undefined) {
                return 
            }

            return response.data

        } catch (error) {
            thunkApi.rejectWithValue(error)
        }
    }
)