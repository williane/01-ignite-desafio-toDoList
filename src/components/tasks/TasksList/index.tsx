import styles from "./styles.module.css";
import { TaskDetail, TaskType } from "./TaskDetail";

interface TasksProps {
  tasks: TaskType[];
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TasksList({ tasks, onCompleteTask, onDeleteTask }: TasksProps) {
  return (
    <div className={styles.wrapper}>
      {tasks?.map((task) => (
        <TaskDetail
          key={task.id}
          task={task}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
