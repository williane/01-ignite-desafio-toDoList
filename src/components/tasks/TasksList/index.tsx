import styles from "./styles.module.css";
import { TaskDetail, TaskType } from "./TaskDetail";

interface TasksProps {
  tasks: TaskType[];
}

export function TasksList({ tasks }: TasksProps) {
  return (
    <div className={styles.wrapper}>
      {tasks?.map((task) => (
        <TaskDetail key={task.id} task={task} />
      ))}
    </div>
  );
}
