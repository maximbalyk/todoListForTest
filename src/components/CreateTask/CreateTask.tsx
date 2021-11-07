/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ITask } from '../../Interfaces';

interface CreateTaskProps {
  task: ITask | any;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({
  task,
  handleKeyPress,
  handleChange,
  addTodo,
}) => {
  return (
    <form
      style={{ width: '100%' }}
      className="d-flex flex-column"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label">Create task</label>

        <input
          type="text"
          placeholder="Please enter task"
          name="task"
          value={task}
          onKeyPress={(e) => handleKeyPress(e)}
          onChange={(event) => (
            handleChange(event)
          )}
          className="form-control mb-2"
          id="exampleInputEmail1"
        />
        <button
          type="button"
          className="btn btn-outline-dark col-3"
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
