import { TaskEmpty } from "./TaskEmpty";
import { TasksList } from "./TasksList";

import styles from "./styles.module.css";
import { TaskType } from "./TasksList/TaskDetail";

interface TasksProps {
  tasks: TaskType[] | null;
  totalTasksConcluded: number;
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Tasks({
  tasks,
  onCompleteTask,
  onDeleteTask,
  totalTasksConcluded,
}: TasksProps) {
  const totalTasksCreated = tasks?.length || 0;
  const totalTasksDone = tasks?.reduce(
    (acc, cur) => acc + Number(cur.concluded),
    0
  );

  return (
    <div className={styles.taskWrapper}>
      <div className={styles.taskInfo}>
        <div>
          <span>Tarefas criadas</span>
          <span>{totalTasksCreated}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>{`${totalTasksDone} de ${totalTasksCreated}`}</span>
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
