import Trash from "../../../../assets/trash.svg";
import Check from "../../../../assets/check.svg";
import styles from "./styles.module.css";

export interface TaskType {
  id: number;
  content: string;
  concluded: boolean;
}

interface TaskProps {
  task: TaskType;
  onCompleteTask: (id: number) => void;
}

export function TaskDetail({ task, onCompleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      {task.concluded ? (
        <button
          className={styles.checked}
          onClick={() => onCompleteTask(task.id)}
        >
          <img src={Check} alt="icone de checked" />
        </button>
      ) : (
        <button
          className={styles.check}
          onClick={() => onCompleteTask(task.id)}
        ></button>
      )}
      <p className={task.concluded ? styles.done : ""}>{task.content}</p>
      <button className={styles.trash}>
        <img src={Trash} alt="icone de deleção" />
      </button>
    </div>
  );
}
