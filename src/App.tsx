import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Tasks } from "./components/tasks";
import Logo from "./assets/logo.svg";
import Plus from "./assets/plus.svg";

import "./global.css";
import styles from "./App.module.css";
import { TaskType } from "./components/tasks/TasksList/TaskDetail";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [task, setTask] = useState("");

  function handleInputTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTask(event.target.value);
  }

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        content: task,
        concluded: false,
      },
    ]);

    setTask("");
  }

  function completeTask(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.concluded = !task.concluded;
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <>
      <nav className={styles.header}>
        <img src={Logo} alt="Logo to do List" />
      </nav>
      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleInputTaskChange}
            value={task}
            onInvalid={handleInvalidTask}
            required
          />
          <button type="submit">
            Criar
            <img src={Plus} alt="icone com o sinal de mais" />
          </button>
        </form>
        <Tasks tasks={tasks} onCompleteTask={completeTask} />
      </main>
    </>
  );
}

export default App;
