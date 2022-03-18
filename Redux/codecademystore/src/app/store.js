import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// Import createStore and combineReducers here.

// Import the slice reducers here.

// Create and export the store here.
