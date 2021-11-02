/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC,
} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useApp } from './useApp';
import CreateTask from './components/CreateTask/CreateTask';
import SearchTask from './components/SearchTask/SearchTask';
import TaskList from './components/TaskList/TaskList';

export const App: FC = () => {
  const {
    showDone,
    showInProgress,
    showAll,
    completeTask,
    deleteTask,
    handleKeyPress,
    addTodo,
    handleChange,
    query,
    currentList,
    task,
  } = useApp();

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }} className="App d-flex align-items-start">
      <CreateTask
        task={task}
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
        addTodo={addTodo}
      />
      <SearchTask query={query} handleChange={handleChange} />
      <TaskList
        currentList={currentList}
        showDone={showDone}
        showInProgress={showInProgress}
        showAll={showAll}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};
