"use client";
import React from "react";
import styles from "./../myDay.module.css";
import { RiFullscreenExitFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./../common/components/todoList/todoTable/TodoTable";
// import PageLoader from "./../common/components/pageLoader/PageLoader";
import { getCurrentDate } from "../helpers/heleperFuncs";
import { useGlobalContext } from "./../common/Context/store";
import { CiMenuBurger } from "react-icons/ci";
import AddTaskInput from "../common/components/todoList/AddTaskInput";
import { useCollection } from "../common/hooks/useCollection";

const Tasks:React.FC = () => {
  const { setMediaMenuIsOpen} = useGlobalContext();
  const {data} = useCollection("tasks");
  return (
    <section
      className={styles.sectionMyDay}>
      <CiMenuBurger
        className={styles.mediaMenu}
        onClick={() => setMediaMenuIsOpen((prev) => !prev)}
      />
      <header className={styles.header}>
        <div className={styles.titleArea} >
          <h2>Tasks</h2>
          <p>{getCurrentDate('long')}</p>
        </div>
        <div className={styles.icons}>
          <RiFullscreenExitFill className={styles.icon} />
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
          <TodoTable tableData={data} />
          <AddTaskInput page = "tasks"/>
    </section>
  );
};

export default Tasks;