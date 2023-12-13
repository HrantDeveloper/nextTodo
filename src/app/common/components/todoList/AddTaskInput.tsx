"use client";
import { IoAdd } from "react-icons/io5";
import { useRef } from "react";
import { postData } from "./../../../helpers/helpersForData";
import { getCurrentDate } from "./../../../helpers/heleperFuncs";
import { useGlobalContext } from "./../../Context/store";
import styles from "./addTaskInput.module.css";

const AddTaskInput:React.FC<{page:string}> = ({ page }) => {
  const { setStateIsChanged } = useGlobalContext();
  const taskName = useRef<HTMLInputElement>(null);
  const choosedDateRef = useRef<HTMLInputElement>(null);
  const date:string = getCurrentDate("short");
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (taskName.current?.value) {
        const data = {
          completed:{
            boolean:false,
            date:""
        },
        date:choosedDateRef.current?.value
            ? choosedDateRef.current.value
            : "",
        important:page == "important" ? true : false,
        name:taskName.current.value,
        type:page
      }
        await postData( data);
      } else {
        return;
      }
      taskName.current.value = "";
      choosedDateRef.current!.value = "";
      setStateIsChanged((prev) => !prev);
      
      return true;
    } catch (error) {
      alert("document was not sent");
      return false;
    }
  };

  return (
    <form
    className={styles.form}
    onSubmit={handleSubmit}>
      <div className={styles.plusIconDiv}>
        <IoAdd style={{ width: "25px", height: "25px" }}/>
      </div>
      <input
        className={styles.icon}
        type="text"
        name="Task"
        ref={taskName}
        placeholder="Add a task"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Add a task")}
      />
      <input
        className={styles.dateInput}
        type="date"
        lang="en"
        ref={choosedDateRef}
        id="start"
        name="trip-start"
        // value="2018-07-22"
        min="2023-11-25"
        max="2123-12-31"
      />
    </form>
  );
};

export default AddTaskInput;
