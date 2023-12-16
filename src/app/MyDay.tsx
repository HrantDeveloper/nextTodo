"use client";
import React, { useEffect } from "react";
import styles from "./myDay.module.css";
import { RiFullscreenExitFill } from "react-icons/ri";
import { LiaLightbulb } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./common/components/todoList/todoTable/TodoTable";
import AddTaskInput from "./common/components/todoList/AddTaskInput";
// import PageLoader from "./common/components/pageLoader/PageLoader";
import { useGlobalContext } from "./common/Context/store";
import { CiMenuBurger } from "react-icons/ci";
import { useCollection } from "./common/hooks/useCollection";
import { getCurrentDate } from "./helpers/heleperFuncs";

const MyDay:React.FC = () => {
  const {data} = useCollection('tasks');
  const myDay = data.filter((item: any) => item.type == "myDay" || item.date ==  getCurrentDate('short'));
  const { setMediaMenuIsOpen } =useGlobalContext();
  return (
    <section
      className={styles.sectionMyDay}>
      <CiMenuBurger
        className={styles.mediaMenu}
        onClick={() => setMediaMenuIsOpen((prev) => !prev)}
      />
      <header className={styles.header}>
        <div className={styles.titleArea} >
          <h2>My Day</h2>
          <p>{getCurrentDate('long')}</p>
        </div>
        <div className={styles.icons}>
          <RiFullscreenExitFill className={styles.icon} />
          <LiaLightbulb className={styles.icon} />
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
      <TodoTable tableData={myDay} />
      <AddTaskInput page="myDay" />
    </section>
  );
};

export default MyDay;
