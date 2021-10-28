/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../Interfaces';

interface TodoListSlices {
  list: ITask[],
  prepareList: ITask[],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [],
    prepareList: [],
  },
  reducers: {
    addTask: (state: TodoListSlices, action) => {
      state.list.push(action.payload);
      state.prepareList.push(action.payload);
    },

    removeTask: (state: TodoListSlices, action) => {
      state.list = state.list.filter((task: ITask) => {
        return task.id !== action.payload;
      });

      state.prepareList = state.prepareList.filter((task: ITask) => {
        return task.id !== action.payload;
      });
    },

    completedTask: (state: TodoListSlices, action) => {
      state.list = state.list.map((task: ITask) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }

        return task;
      });

      state.prepareList = state.prepareList.map((task: ITask) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }

        return task;
      });
    },

    showAllTask: (state: TodoListSlices) => {
      state.prepareList = state.list.filter((task: ITask) => task);
    },

    showDoneTask: (state: TodoListSlices) => {
      state.prepareList = state.list.filter((task: ITask) => task.isComplete === true);
    },

    showTaskInProgress: (state: TodoListSlices) => {
      state.prepareList = state.list.filter((task: ITask) => task.isComplete === false);
    },

    showQueryTask: (state: TodoListSlices, action) => {
      state.prepareList = state.list.filter((task: ITask) => {
        return task.taskName.toLowerCase().includes(
          action.payload.toLowerCase(),
        );
      });
    },

  },
});

export const {
  addTask,
  removeTask,
  completedTask,
  showTaskInProgress,
  showAllTask,
  showDoneTask,
  showQueryTask,
} = todoListSlice.actions;

export default todoListSlice.reducer;
