/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/quotes */
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete:string): void;
  completeTask(taskNameToComplete:string): void;
}

const TodoTask = ({ task, deleteTask, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
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
        className="btn btn-dark btn-sm"
        type="button"
        onClick={() => {
          completeTask(task.id);
        }}
      >
        Complete Task
      </button>
      <button
        className="btn btn-danger btn-sm"
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
