import Trash from "../../../../assets/trash.svg";
import styles from "./styles.module.css";

export function TaskDetail() {
  return (
    <div className={styles.task}>
      <button className={styles.check}></button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.trash}>
        <img src={Trash} alt="icone de deleção" />
      </button>
    </div>
  );
}
