import Trash from "../../../../assets/trash.svg";
import Check from "../../../../assets/check.svg";
import styles from "./styles.module.css";

export function TaskDetail() {
  const isDone = false;

  return (
    <div className={styles.task}>
      {isDone ? (
        <button className={styles.checked}>
          <img src={Check} alt="icone de checked" />
        </button>
      ) : (
        <button className={styles.check}></button>
      )}
      <p className={isDone ? styles.done : ""}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.trash}>
        <img src={Trash} alt="icone de deleção" />
      </button>
    </div>
  );
}
