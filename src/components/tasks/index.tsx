import { TaskEmpty } from "./TaskEmpty";
import { TasksList } from "./TasksList";

import styles from "./styles.module.css";
import { TaskType } from "./TasksList/TaskDetail";

interface TasksProps {
  tasks: TaskType[] | null;
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Tasks({ tasks, onCompleteTask, onDeleteTask }: TasksProps) {
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
      {tasks?.length ? (
        <TasksList
          tasks={tasks}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ) : (
        <TaskEmpty />
      )}
    </div>
  );
}
