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

const Important:React.FC = () => {
  const { setMediaMenuIsOpen } = useGlobalContext();
  const {data} = useCollection('tasks');
  const importantData = data.filter((item)=>item.important)
  return (
    <section
      className={styles.sectionMyDay}
      style={{backgroundColor:"#DE3163"}}
      >
      <CiMenuBurger
        className={styles.mediaMenu}
        onClick={() => setMediaMenuIsOpen((prev) => !prev)}
      />
      <header className={styles.header}>
        <div className={styles.titleArea} >
          <h2>Important</h2>
          <p>{getCurrentDate('long')}</p>
        </div>
        <div className={styles.icons}>
          <RiFullscreenExitFill className={styles.icon} />
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
          <TodoTable tableData={importantData} />
          <AddTaskInput page="important"/>  
    </section>
  );
};

export default Important;