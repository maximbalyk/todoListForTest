export interface ITask {
  taskName: string;
  isComplete: boolean;
  id: string;
}

export interface TodoListSlices {
  list: ITask[],
  prepareList: ITask[],
}

export interface RootState {
  todo: TodoListSlices;
}
