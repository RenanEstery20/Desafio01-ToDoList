import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span></span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span></span>
      </aside>
    </header>
  );
}
