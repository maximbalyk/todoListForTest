/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ChangeEvent, useState } from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [prepareTodoList, setPrepareTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setQuery(event.target.value);
      console.log(query);
      setPrepareTodoList(todoList.filter((task) => {
        console.log(query, 'inside');

        return task.taskName.toLowerCase().includes(query.toLowerCase());
      }));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      isComplete: false,
      id: uuidv4(),
    };

    console.log(todoList);
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setPrepareTodoList([...prepareTodoList, newTask]);
    setTask('');
    setIsComplete(false);
  };

  const deleteTask = (taskNameToDelete: string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));

    setPrepareTodoList(prepareTodoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }));
  };

  const completeTask = (taskNameToComplete: string):void => {
    setTodoList(todoList.map((task) => {
      if (task.taskName === taskNameToComplete) {
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
