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
        <img width="42px" src={!task.isComplete ? './square.svg' : './square_ok.svg'} alt="" />
        <span className="btn-light">
          {task.taskName}
        </span>
      </div>
      <div className="btn-group" role="group" aria-label="Basic example">
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
          className="btn btn-dark btn-sm"
          type="button"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
