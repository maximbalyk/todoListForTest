import React from 'react';
import { ITask } from '../../Interfaces';

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete:string): void;
  completeTask(taskNameToComplete:string): void;
}

const TodoTask = ({ task, deleteTask, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content btn-light">
        <button
          className="buttonIcon"
          type="button"
          onClick={() => {
            completeTask(task.id);
          }}
        >
          <img
            width="42px"
            src={!task.isComplete ? './square.svg' : './square_ok.svg'}
            alt="complete_image"
          />
        </button>
        <span className="btn-light">
          {task.taskName}
        </span>
      </div>
      <button
        className="btn btn-outline-dark btn-sm mr-1"
        type="button"
        onClick={() => {
          completeTask(task.id);
        }}
      >
        Complete Task
      </button>
      <button
        className="btn btn-outline-danger btn-sm"
        type="button"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete task
      </button>
    </div>
  );
};

export default TodoTask;
