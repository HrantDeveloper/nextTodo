"use client";
import React, { useEffect } from "react";
import styles from "./myDay.module.css";
import { RiFullscreenExitFill } from "react-icons/ri";
import { LiaLightbulb } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./common/components/todoList/todoTable/TodoTable";
import AddTaskInput from "./common/components/todoList/AddTaskInput";
import { getData } from "./helpers/helpersForData";
import PageLoader from "./common/components/pageLoader/PageLoader";
import { useGlobalContext } from "./common/Context/store";
import { CiMenuBurger } from "react-icons/ci";

const MyDay:React.FC = () => {
  const { stateIsChanged, tableData, setTableData, setMediaMenuIsOpen,isLoading,setIsLoading,dateLarge,dateShort } =
    useGlobalContext();

const fetchData =async()=>{
    let filteredData: {}[] = [];
    const data:any = await getData();
    data.map((item:any) => {
             if (item.type == "myDay") {
               filteredData.push(item);
             } else if (item.type == "planned" && item.date == dateShort || item.date ==dateShort) {
              filteredData.push(item);
             }
            })
    setTableData(filteredData);
    setIsLoading(false);
}
  useEffect(() => {
      setIsLoading(true);
      fetchData();
  },[stateIsChanged]);

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
          <p>{dateLarge}</p>
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
          <AddTaskInput page="myDay" />
        </>
      )}
    </section>
  );
};

export default MyDay;