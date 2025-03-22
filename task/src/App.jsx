import { useEffect, useRef, useState } from 'react';
import List from './components/List/List';
import styles from "./App.module.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const inputRef = useRef();

  useEffect(() => {
    setDate(new Date());
  }, []);

  const onTaskAdd = (e) => {
    e.preventDefault();
    let taskValue = inputRef.current.value.trim();
    if (!taskValue) return;

    setTasks([...tasks, { id: taskId, task: taskValue, state: 'pending' }]);
    setTaskId(taskId + 1);
    inputRef.current.value = "";
  };

  const onTaskRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <>
      <div className={styles.main}>
        <h1>Note your tasks</h1>
        <h3>{date.toLocaleDateString('uk-UA')}</h3>
        <input type="text" ref={inputRef} placeholder="New Task" className={styles.input}/>
        <button onClick={onTaskAdd} className={styles.button}>Add task</button>
        <List tasks={tasks} onTaskRemove={onTaskRemove} />
      </div>
    </>
  );
}

export default App;
