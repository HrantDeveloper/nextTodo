"use client";
import styles from "./todoTable.module.css";
import TodoListItem from "./TodoListItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const TodoTable :React.FC<any>= ({ tableData }) => {
  let thereIsCompleted = 0;
  const [completedOpen, setCompletedOpen] = useState(true);

  return (
    <div className={styles.todoTable}>
      {tableData &&
        tableData.map((item:itemDataType) => {
          if (item.completed.boolean == false) {
            return <TodoListItem key={item.id} data={item} />;
          } else {
            thereIsCompleted = thereIsCompleted + 1;
          }
        })}
      {thereIsCompleted > 0 && (
        <div
          className={styles.completedButton}
          onClick={() => setCompletedOpen((prev) => !prev)}
        >
          {completedOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          <p>Completed {thereIsCompleted}</p>
        </div>
      )}
      {tableData &&
        completedOpen &&
        tableData.map((item:itemDataType) => {
          if (item.completed.boolean) {
            return <TodoListItem key={item.id} data={item} />;
          }
        })}
    </div>
  );
};

export default TodoTable;
