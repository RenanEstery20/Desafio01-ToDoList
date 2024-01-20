import { useState } from 'react';
import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Header as ListHeader } from './components/List/Header';
import { Item } from './components/List/Item';
import { PlusCircle } from '@phosphor-icons/react';
import { Empty } from './components/List/Empty';

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }
  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            Criar
          </Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  toggleTaskStatus={handleToggleTask}
                  removeTask={handleRemoveTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  );
}
