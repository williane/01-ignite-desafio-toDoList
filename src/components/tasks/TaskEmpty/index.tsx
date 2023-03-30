import Task from "../../../assets/task.svg";

import styles from "./styles.module.css";

export function TaskEmpty() {
  return (
    <div className={styles.taskEmpty}>
      <img src={Task} alt="Icone representando tarefas" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
