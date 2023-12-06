"use client";
import React, { useEffect, useState } from "react";
import styles from "./toDoCtx.module.css";
import { getCurrentDate } from "./../../helpers/heleperFuncs";
import { RiFullscreenExitFill } from "react-icons/ri";
import { LiaLightbulb } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "../todoList/todoTable/TodoTable";
import AddTaskInput from "../todoList/AddTaskInput";
import { getData } from "./../../helpers/helpersForData";
import PageLoader from "../pageLoader/PageLoader";
import { useGlobalContext } from "./../../Context/store";
import { CiMenuBurger } from "react-icons/ci";

const ToDoCtx:React.FC <{page:string,title:string}>= ({ page, title } ) => {
  const date = getCurrentDate("large");
  const { stateIsChanged, tableData, setTableData, setMediaMenuIsOpen } =
    useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);
  let bgColor;

  if (page == "important") {
    bgColor = "#DE3163";
  } else if (page == "planned") {
    bgColor = "#add2e4";
  } else if (page == "search") {
    bgColor = "#1434A4";
  } else {
    bgColor = "#34a193";
  }

const fetchData =async(page:string)=>{
    const data = await getData(page);
    setIsLoading(false);
    data.shift()
    // console.log(data)
    setTableData(data);
}

  useEffect(() => {
    if (page == "search") {
      return;
    } else {
      setIsLoading(true);
      fetchData(page);
    }
  }, [page, stateIsChanged]);

  return (
    <section
      className={styles.sectionMyDay}
      style={{ backgroundColor: bgColor }}
    >
      <CiMenuBurger
        className={styles.mediaMenu}
        onClick={() => setMediaMenuIsOpen((prev) => !prev)}
      />
      <header className={styles.toDoCtxHeader}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        <div className={styles.icons}>
          <RiFullscreenExitFill className={styles.icon} />
          <LiaLightbulb className={styles.icon} />
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <TodoTable tableData={tableData} />
          {page !== "search" && <AddTaskInput page={page} />}
        </>
      )}
    </section>
  );
};

export default ToDoCtx;
