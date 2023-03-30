import Logo from "./assets/logo.svg";
import Plus from "./assets/plus.svg";
import Task from "./assets/task.svg";

import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <nav className={styles.header}>
        <img src={Logo} alt="Logo to do List" />
      </nav>
      <main className={styles.wrapper}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <img src={Plus} alt="icone com o sinal de mais" />
          </button>
        </form>
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
          <div className={styles.taskEmpty}>
            <img src={Task} alt="Icone representando tarefas" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
