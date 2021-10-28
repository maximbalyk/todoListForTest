import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  completedTask,
  removeTask,
} from './features/todoList/todoListSlicer';
import { ITask, RootState } from './Interfaces';

export const useApp = () => {
  const [task, setTask] = useState('');
  const [query, setQuery] = useState('');
  const [currentList, setCurrentList] = useState<ITask[]>([]);
  const todoList = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentList(todoList.length ? todoList : []);
  }, [todoList]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setQuery(event.target.value);
      setCurrentList(todoList.filter((item: ITask) => {
        return item.taskName.toLowerCase().includes(
          event.target.value.toLowerCase(),
        );
      }));
    }
  };

  const addTodo = () => {
    const newTask = {
      taskName: task,
      isComplete: false,
      id: uuidv4(),
    };

    if (task.length !== 0) {
      dispatch(addTask(newTask));
      setTask('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTask = (taskIdToDelete: string) => dispatch(removeTask(taskIdToDelete));
  const completeTask = (taskIdToComplete: string) => dispatch(completedTask(taskIdToComplete));
  const showAll = () => {
    setQuery('');
    setCurrentList(todoList);
  };

  const showInProgress = () => {
    setQuery('');
    setCurrentList(todoList.filter((item: ITask) => {
      return item.isComplete === false;
    }));
  };

  const showDone = () => {
    setQuery('');
    setCurrentList(todoList.filter((item: ITask) => {
      return item.isComplete === true;
    }));
  };

  return {
    showDone,
    showInProgress,
    showAll,
    completeTask,
    deleteTask,
    handleKeyPress,
    addTodo,
    handleChange,
    query,
    currentList,
    task,
  };
};
