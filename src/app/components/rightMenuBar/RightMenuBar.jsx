"use client";
import React from "react";
import styles from "./rightMenuBar.module.css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { useGlobalContext } from "@/app/Context/store";
import { useRef, useState } from "react";
import { updateData, deleteData } from "@/app/helpers/helpersForData";
import ChangerToImportant from "@/app/baseComponents/ChangerToImportant";
import DateChanger from "./DateChanger";
import BaseCompleterInput from "@/app/baseComponents/baseCompleterInput";
import { getCurrentDate } from "@/app/helpers/heleperFuncs";
import Modal from "./Modal";

const RightMenuBar = ({ data }) => {
  const { setMenuBarIsOpen, setStateIsChanged, setMenuBarData } =
    useGlobalContext();
  const inputRef = useRef();
  const [calendarIsOpen, setCalendarIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const today = getCurrentDate("short");

  const updateItem = async (id, newData, whatIsChanged) => {
    if (whatIsChanged == "title") {
      if (newData.name) {
        await updateData(id, newData);
      } else {
        return;
      }
    }
    await updateData(id, newData);
    try {
      setStateIsChanged((prev) => !prev);
      setMenuBarData(newData);
      inputRef.current.value = "";
      if (whatIsChanged == "date") {
        setCalendarIsOpen((prev) => !prev);
      }
    } catch (err) {
      return;
    }
  };

  const deleteItem = async (id) => {
    await deleteData(id, "tasks");
    try {
      setStateIsChanged((prev) => !prev);
      setModalIsOpen((prev) => !prev);
      setMenuBarIsOpen((prev) => !prev);
    } catch (err) {
      return;
    }
  };

  return (
    <section className={styles.menuBar}>
      <div className={styles.completeCloseDiv}>
        <BaseCompleterInput data={data} func={updateItem} date={today} />
        <IoIosClose
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
          onClick={() => setMenuBarIsOpen((prev) => !prev)}
        />
      </div>
      <div style={{ display: "flex", color: "red" }}>
        <input
          type="text"
          name="updatedName"
          placeholder={data.name}
          className={styles.updateInput}
          // value={data.name}
          ref={inputRef}
        />
        <button
          onClick={() =>
            updateItem(
              data.id,
              {
                ...data,
                name: inputRef.current.value && inputRef.current.value,
              },
              "title"
            )
          }
          className={styles.updateButton}
        >
          Update
        </button>
      </div>
      <div className={styles.important}>
        <ChangerToImportant
          classes={styles.icon}
          updateItem={updateItem}
          id={data.id}
          data={data}
        />
        {/* hishel chapsy dzel */}
      </div>
      <DateChanger
        calendarIsOpen={calendarIsOpen}
        setCalendarIsOpen={setCalendarIsOpen}
        data={data}
        updateItem={updateItem}
      />
      <div className={styles.deleterDiv}>
        <p>
          {data.completed.boolean
            ? `Completed ${data.completed.date} `
            : `Created ${data.date}`}
        </p>
        <div>
          <AiOutlineDelete
            className={styles.icon}
            style={{ marginLeft: "20px" }}
            onClick={() => setModalIsOpen((prev) => !prev)}
          />
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          data={data}
          setModalIsOpen={setModalIsOpen}
          removeItem={deleteItem}
        />
      )}
    </section>
  );
};

export default RightMenuBar;
