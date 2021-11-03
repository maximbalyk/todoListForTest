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

export interface TaskListProps {
  currentList: ITask[];
  showDone: () => void;
  showInProgress: () => void;
  showAll: () => void;
  deleteTask(taskNameToDelete:string): void;
  completeTask(taskNameToComplete:string): void;
}
