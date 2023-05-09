import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../shared/baseUrl';

export const submitTask = createAsyncThunk(
    'task/postTask',
    async (payload, { dispatch, getState }) => {
        setTimeout(() => {
            const { task } = getState();
            payload.date = new Date().toISOString();
            payload.id = task.tasksArray.length
            dispatch(addTask(payload))
        }, 2000);
    }
);

