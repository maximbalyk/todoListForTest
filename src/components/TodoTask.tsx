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
        <span className={!task.isComplete ? 'btn-danger' : 'btn-success'}>{task.taskName}</span>
      </div>
      <button
        className="btn btn-success btn-sm"
        type="button"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Complete Task
      </button>
      <button
        className="btn btn-danger btn-sm"
        type="button"
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
