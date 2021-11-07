import React from 'react';
import { ITask, TaskListProps } from '../../Interfaces';
import TodoTask from '../TodoTask/TodoTask';

const TaskList: React.FC<TaskListProps> = ({
  currentList,
  showDone,
  showInProgress,
  showAll,
  completeTask,
  deleteTask,
}) => {
  return (
    <>
      <div className="btn-group mb-3" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-dark" onClick={showAll}>Show All</button>
        <button type="button" className="btn btn-outline-dark" onClick={showInProgress}>In progress</button>
        <button type="button" className="btn btn-outline-dark" onClick={showDone}>Done task</button>
      </div>

      {!currentList.length
        ? <div className="alert alert-dark w-100 text-center">You have no task</div>
        : null}
      <ul className="list-group">
        {/* eslint-disable-next-line no-shadow */}
        {currentList.map((task: ITask) => {
          return (
            <li className="list-group-item p-0" key={task.id}>
              <TodoTask
                task={task}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
