import { TaskEmpty } from "./TaskEmpty";
import { TasksList } from "./TasksList";

import styles from "./styles.module.css";
import { TaskType } from "./TasksList/TaskDetail";

export interface TasksProps {
  tasks: TaskType[] | null;
}

export function Tasks({ tasks }: TasksProps) {
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
      {tasks?.length ? <TasksList tasks={tasks} /> : <TaskEmpty />}
    </div>
  );
}
