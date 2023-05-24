export interface Task {
  key: string;
  task: string;
}

export interface TaskListProps {
  data: Task[];
  completeTask: (data: Task) => void
}

export interface TaskCellProps {
  task: Task;
  completeTask: (data: Task) => void;
}