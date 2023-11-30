"use client";
import styles from "./todoTable.module.css";
import TodoListItem from "./TodoListItem";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const TodoTable = ({ tableData }) => {
  const [widgets, setWidgets] = useState([]);
  let thereIsCompleted = 0;
  const [completedOpen, setCompletedOpen] = useState(true);

  const handleOnDrag = () => {};

  return (
    <div className={styles.todoTable}>
      {tableData &&
        tableData.map((item) => {
          if (item.completed.boolean == false) {
            return <TodoListItem key={item.id} data={item} />;
          } else {
            thereIsCompleted = thereIsCompleted + 1;
          }
        })}
      {thereIsCompleted > 0 && (
        <div
          style={{
            width: "150px",
            height: "30px",
            marginTop: "10px",
            backgroundColor: " #C0C0C0",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          // className={styles.completed}
          onClick={() => setCompletedOpen((prev) => !prev)}
        >
          {completedOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          <p>Completed {thereIsCompleted}</p>
        </div>
      )}
      {tableData &&
        completedOpen &&
        tableData.map((item) => {
          if (item.completed.boolean) {
            return <TodoListItem key={item.id} data={item} completed={true} />;
          }
        })}
    </div>
  );
};

export default TodoTable;
