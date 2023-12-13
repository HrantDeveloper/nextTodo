"use client";
import React, { useEffect } from "react";
import styles from "./../myDay.module.css";
import { RiFullscreenExitFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./../common/components/todoList/todoTable/TodoTable";
import { getData } from "./../helpers/helpersForData";
import PageLoader from "./../common/components/pageLoader/PageLoader";
import { useGlobalContext } from "./../common/Context/store";
import { CiMenuBurger } from "react-icons/ci";
import AddTaskInput from "../common/components/todoList/AddTaskInput";

const Important:React.FC = () => {
  const {
    stateIsChanged,
    tableData,
    setTableData,
    setMediaMenuIsOpen,
    isLoading,
    setIsLoading,
    dateLarge,
  } = useGlobalContext();

const fetchData =async()=>{
    let filteredData: {}[] = [];
    const data:any = await getData();
    data.map((item:any) => {
      if (item.important) {
        filteredData.push(item);
      }
     })
    setTableData(filteredData);
    setIsLoading(false);
}

  useEffect(() => {
      setIsLoading(true);
      fetchData();
  }, [stateIsChanged]);

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
          <p>{dateLarge}</p>
        </div>
        <div className={styles.icons}>
          <RiFullscreenExitFill className={styles.icon} />
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <TodoTable tableData={tableData} />
          <AddTaskInput page="important"/>
        </>
      )}
    </section>
  );
};

export default Important;