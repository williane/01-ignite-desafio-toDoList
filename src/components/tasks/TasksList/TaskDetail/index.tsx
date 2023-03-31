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
}

export function TaskDetail({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      {task.concluded ? (
        <button className={styles.checked}>
          <img src={Check} alt="icone de checked" />
        </button>
      ) : (
        <button className={styles.check}></button>
      )}
      <p className={task.concluded ? styles.done : ""}>{task.content}</p>
      <button className={styles.trash}>
        <img src={Trash} alt="icone de deleção" />
      </button>
    </div>
  );
}
