import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Header as ListHeader } from './components/List/Header';
import { Item } from './components/List/Item';
export function App() {
  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button></Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader />
          <div>
            <Item />
          </div>
        </div>
      </section>
    </main>
  );
}
