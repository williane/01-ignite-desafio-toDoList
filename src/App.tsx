import { TaskEmpty } from "./components/tasks/TaskEmpty";

import Logo from "./assets/logo.svg";
import Plus from "./assets/plus.svg";

import "./global.css";
import styles from "./App.module.css";
import { Tasks } from "./components/tasks";

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
        <Tasks />
      </main>
    </>
  );
}

export default App;
