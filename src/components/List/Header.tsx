/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './Header.module.css';
interface Props {
  tasksCounter: number;
  checkedTasksCounter?: number;
}

export function Header({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>{checkedTasksCounter}</span>
      </aside>
    </header>
  );
}
