import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ task, onTaskRemove }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className={`${styles.item} ${isChecked ? styles.completed : ""}`}>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <span>{task.task}</span>
      <div onClick={() => onTaskRemove(task.id)}>❌</div>
    </li>
  );
};

export default Item;
