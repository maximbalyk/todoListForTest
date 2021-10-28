/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  FC,
  ChangeEvent,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTask,
  removeTask,
  completedTask,
  showTaskInProgress,
  showAllTask,
  showDoneTask,
  showQueryTask,
} from './features/todoList/todoListSlicer';
import TodoTask from './components/TodoTask';
import { ITask, RootState } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC = () => {
  const [task, setTask] = useState('');
  const [query, setQuery] = useState('');
  const prepareTodoList = useSelector((state: RootState) => state.todo.prepareList);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setQuery(event.target.value);
      dispatch(showQueryTask(event.target.value));
    }
  };

  const addTodo = () => {
    const newTask = {
      taskName: task,
      isComplete: false,
      id: uuidv4(),
    };

    if (task.length !== 0) {
      dispatch(addTask(newTask));
      setTask('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTask = (taskIdToDelete: string) => dispatch(removeTask(taskIdToDelete));
  const completeTask = (taskIdToComplete: string) => dispatch(completedTask(taskIdToComplete));
  const showAll = () => {
    setQuery('');
    dispatch(showAllTask());
  };

  const showInProgress = () => {
    setQuery('');
    dispatch(showTaskInProgress());
  };

  const showDone = () => {
    setQuery('');
    dispatch(showDoneTask());
  };

  return (
    <div className="App">
      <form
        className="d-flex flex-column"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="mb-3 row">
          <label htmlFor="exampleInputEmail1" className="form-label">Create task</label>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Please enter task"
              name="task"
              value={task}
              onKeyPress={(e) => handleKeyPress(e)}
              onChange={(event) => (
                handleChange(event)
              )}
              className="form-control"
              id="exampleInputEmail1"
            />
            <button
              type="button"
              className="btn btn-light"
              onClick={addTodo}
            >
              Add Task
            </button>
          </div>
          <label htmlFor="exampleInputEmail2" className="form-label">Search task</label>
          <input
            type="text"
            placeholder="Enter key word"
            name="query"
            value={query}
            onChange={(event) => (
              handleChange(event)
            )}
            className="form-control"
            id="exampleInputEmail2"
          />
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-dark" onClick={showAll}>Show All</button>
          <button type="button" className="btn btn-dark" onClick={showInProgress}>In progress</button>
          <button type="button" className="btn btn-dark" onClick={showDone}>Done task</button>
        </div>
      </form>

      <ul className="list-group">
        {/* eslint-disable-next-line no-shadow */}
        {prepareTodoList.map((task: ITask) => {
          return (
            <li className="list-group-item" key={task.id}>
              <TodoTask
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
