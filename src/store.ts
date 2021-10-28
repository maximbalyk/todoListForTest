import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './features/todoList/todoListSlicer';

export default configureStore({
  reducer: {
    todo: todoListReducer,
  },
});
