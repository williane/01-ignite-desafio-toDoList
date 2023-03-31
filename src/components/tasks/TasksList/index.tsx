import styles from "./styles.module.css";
import { TaskDetail } from "./TaskDetail";

export function TasksList() {
  return (
    <div className={styles.wrapper}>
      <TaskDetail />
    </div>
  );
}
