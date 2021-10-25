/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ChangeEvent, useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC = () => {
  const [task, setTask] = useState('');
  const [query, setQuery] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [prepareTodoList, setPrepareTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setQuery(event.target.value);
      setPrepareTodoList(todoList.filter((task) => {
        return task.taskName.toLowerCase().includes(
          event.target.value.toLowerCase(),
        );
      }));
    }
  };

  const addTask = () => {
    const newTask = {
      taskName: task,
      isComplete: false,
      id: uuidv4(),
    };

    setTodoList([...todoList, newTask]);
    setPrepareTodoList([...prepareTodoList, newTask]);
    setTask('');
    setIsComplete(false);
  };

  const deleteTask = (taskIdToDelete: string) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== taskIdToDelete;
    }));

    setPrepareTodoList(prepareTodoList.filter((task) => {
      return task.id !== taskIdToDelete;
    }));
  };

  const completeTask = (taskIdToComplete: string):void => {
    setTodoList(todoList.map((task) => {
      if (task.id === taskIdToComplete) {
        // eslint-disable-next-line no-param-reassign
        task.isComplete = !task.isComplete;
      }

      return task;
    }));
  };

  const showAll = (): void => {
    setPrepareTodoList(todoList.filter((task) => {
      return task;
    }));
  };

  const showInProgress = (): void => {
    setPrepareTodoList(todoList.filter((task) => {
      return task.isComplete === false;
    }));
  };

  const showDone = (): void => {
    setPrepareTodoList(todoList.filter((task) => {
      return task.isComplete === true;
    }));
  };

  return (
    <div className="App">
      <form onSubmit={e => {
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
              onChange={(event) => (
                handleChange(event)
              )}
              className="form-control"
              id="exampleInputEmail1"
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={addTask}
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
          <button type="button" className="btn btn-primary" onClick={showAll}>Show All</button>
          <button type="button" className="btn btn-primary" onClick={showInProgress}>In progress</button>
          <button type="button" className="btn btn-primary" onClick={showDone}>Done task</button>
        </div>
      </form>

      <ul className="list-group">
        {prepareTodoList.map((task: ITask, key: number) => {
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
