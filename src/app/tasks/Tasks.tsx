"use client";
import React, { useEffect ,useCallback} from "react";
import styles from "./../myDay.module.css";
import { RiFullscreenExitFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./../common/components/todoList/todoTable/TodoTable";

import { getData } from "./../helpers/helpersForData";
import PageLoader from "./../common/components/pageLoader/PageLoader";
import { useGlobalContext } from "./../common/Context/store";
import { CiMenuBurger } from "react-icons/ci";
import AddTaskInput from "../common/components/todoList/AddTaskInput";

const Tasks:React.FC = () => {
  const { stateIsChanged, tableData, setTableData, setMediaMenuIsOpen,isLoading,setIsLoading,dateLarge,dateShort } =
    useGlobalContext();

const fetchData = useCallback (async()=>{
  try{
    const data = await getData();     
    setTableData(data);
    console.log("tarmacrec")
  }catch(error){
    return
  } 
  setIsLoading(false);
},[])

  useEffect(() => {
      setIsLoading(true);
      fetchData();
      
  }, [stateIsChanged]);


  useEffect(()=>{
    console.log(tableData)
  })
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
          <AddTaskInput page = "tasks"/>
        </>
      )}
    </section>
  );
};

export default Tasks;