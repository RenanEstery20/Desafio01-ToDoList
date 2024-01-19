import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';
import todoLogo from '../assets/todo.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logos}>
        <img src={rocketLogo} alt="logo da aplicação" />
        <img src={todoLogo} alt="logo da aplicação" />
      </div>
    </header>
  );
}
