import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'http://localhost:4000';


export const requestAddTask = createAsyncThunk(
    'add-task',
    async (data, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${baseUrl}/add-task`, {
          data: data,
        });
        return response.data;
      } catch (e) {
        console.log('failed to add task', e);
        return rejectWithValue([]);
      }
    }
);

export const requestGetAllTasks = createAsyncThunk(
    'get-all-tasks',
    async (_,{ rejectWithValue }) => {
      try {
        const response = await axios.get(`${baseUrl}/get-all-tasks`);
        return response.data;
      } catch (e) {
        console.log('failed to get all tasks', e);
        return rejectWithValue([]);
      }
    }
);

export const requestUpdateTask = createAsyncThunk(
    'update-task',
    async (data, { rejectWithValue }) => {
      try {
        const {id} = data;
        delete data.id;
        const response = await axios.put(`${baseUrl}/update-task/${id}`);
        return response.data;
      } catch (e) {
        console.log('failed to get update tasks', e);
        return rejectWithValue([]);
      }
    }
);

export const requestDeleteTask = createAsyncThunk(
    'delete-task',
    async (data, { rejectWithValue }) => {
      try {
        const {id} = data;
        const response = await axios.delete(`${baseUrl}/delete-task/${id}`);
        return response.data;
      } catch (e) {
        console.log('failed to get update tasks', e);
        return rejectWithValue([]);
      }
    }
);

const initialState = {
    id: '',
    dueDate: '',
    status: '',
    name: '',
    description:'',
    inFlights: {
        requestAddTask: { status: 'idle', error: null },
        requestGetAllTasks: { status: 'idle', error: null },
        requestUpdateTask: { status: 'idle', error: null },
        requestDeleteTask: { status: 'idle', error: null },
      },
}

const {reducer} = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(requestAddTask.pending, (state) => {
          state.inFlights.requestAddTask.status = 'pending';
          state.inFlights.requestAddTask.error = null;
        })
        .addCase(requestAddTask.fulfilled, (state, action) => {
          state.inFlights.requestAddTask.status = 'fulfilled';
          state.tasks = action.payload;
        })
        .addCase(requestAddTask.rejected, (state, action) => {
          state.inFlights.requestAddTask.status = 'rejected';
          state.inFlights.requestAddTask.error = action.error.message;
        })


        .addCase(requestUpdateTask.pending, (state) => {
          state.inFlights.requestUpdateTask.status = 'pending';
          state.inFlights.requestUpdateTask.error = null;
        })
        .addCase(requestUpdateTask.fulfilled, (state, action) => {
          state.inFlights.requestUpdateTask.status = 'fulfilled';
          state.tasks = action.payload;
        })
        .addCase(requestUpdateTask.rejected, (state, action) => {
          state.inFlights.requestUpdateTask.status = 'rejected';
          state.inFlights.requestUpdateTask.error = action.error.message;
        })



        .addCase(requestDeleteTask.pending, (state) => {
          state.inFlights.requestDeleteTask.status = 'pending';
          state.inFlights.requestDeleteTask.error = null;
        })
        .addCase(requestDeleteTask.fulfilled, (state, action) => {
          state.inFlights.requestDeleteTask.status = 'fulfilled';
          state.tasks = action.payload;
        })
        .addCase(requestDeleteTask.rejected, (state, action) => {
          state.inFlights.requestDeleteTask.status = 'rejected';
          state.inFlights.requestDeleteTask.error = action.error.message;
        })


        .addCase(requestGetAllTasksTask.pending, (state) => {
          state.inFlights.requestGetAllTasks.status = 'pending';
          state.inFlights.requestGetAllTasks.error = null;
        })
        .addCase(requestGetAllTasks.fulfilled, (state, action) => {
          state.inFlights.requestGetAllTasks.status = 'fulfilled';
          state.tasks = action.payload;
        })
        .addCase(requestGetAllTasks.rejected, (state, action) => {
          state.inFlights.requestGetAllTasks.status = 'rejected';
          state.inFlights.requestGetAllTasks.error = action.error.message;
        });




    }
})

export default reducer;