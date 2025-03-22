import React from "react";
import styles from "./List.module.css";
import Item from "../Item/Item";

const List = ({ tasks, onTaskRemove }) => {
  return (
    <div className={styles.list}>
      <ul className={styles.ul}>
        {tasks.map((task) => (
          <Item key={task.id} task={task} onTaskRemove={onTaskRemove}/>
        ))}
      </ul>
    </div>
  );
};

export default List;
