import { TaskEmpty } from "./TaskEmpty";
import { TasksList } from "./TasksList";

import styles from "./styles.module.css";

export function Tasks() {
  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInfo}>
        <div>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </div>
      <TasksList />
    </div>
  );
}
