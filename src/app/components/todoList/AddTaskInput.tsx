"use client";
import { IoAdd } from "react-icons/io5";
import { useRef, useEffect, useState } from "react";
import { postData } from "./../../helpers/helpersForData";
import { getCurrentDate } from "../../helpers/heleperFuncs";
import { useGlobalContext } from "./../../Context/store";

const AddTaskInput:React.FC<{page:string}> = ({ page }) => {
  const { setStateIsChanged } = useGlobalContext();
  const taskName = useRef<HTMLInputElement>(null);
  const choosedDateRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState("");
  const date:string = getCurrentDate("short");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageItem = window.localStorage.getItem("isAcvtiveId");
      localStorageItem && setIsActive(localStorageItem);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (taskName.current?.value) {
        await postData( {
        completed:{
          boolean:false,
          date:""
      },
      date:choosedDateRef.current?.value
          ? choosedDateRef.current.value
          : date,
      important:page == "important" ? true : false,
      name:taskName.current.value,
      type:page
    }
        );
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
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        paddingLeft: "10px",
        height: "50px",
        backgroundColor: "white",
        marginTop: "30px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IoAdd style={{ width: "25px", height: "25px" }} />
      </div>
      <input
        style={{
          height: "100%",
          width: "100%",
          border: "none",
          paddingLeft: "10px",
          borderRadius: "5px",
        }}
        type="text"
        name="Task"
        ref={taskName}
        placeholder="Add a task"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Add a task")}
      />
      <input
        style={{ border: "none", width: "100px" }}
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
