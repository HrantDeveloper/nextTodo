"use client";
import React, { useEffect } from "react";
import styles from "./toDoListItem.module.css";
import { getCurrentDate } from "@/app/helpers/heleperFuncs";
import { updateData } from "@/app/helpers/helpersForData";
import { useGlobalContext } from "@/app/Context/store";
import ChangerToImportant from "@/app/baseComponents/ChangerToImportant";
import BaseCompleterInput from "@/app/baseComponents/baseCompleterInput";

const TodoListItem = ({ data, completed }) => {
  const date = getCurrentDate("short");
  const { setStateIsChanged, setMenuBarIsOpen, setMenuBarData, menuBarIsOpen } =
    useGlobalContext();

  const openEditingMenu = () => {
    setMenuBarData(data);
    if (!menuBarIsOpen) {
      setMenuBarIsOpen((prev) => !prev);
    }
  };

  const updateItem = async (id, newData) => {
    await updateData(id, newData);
    try {
      setStateIsChanged((prev) => !prev);
      if (menuBarIsOpen) {
        setMenuBarData(newData);
      }
    } catch (err) {
      return;
    }
  };

  return (
    <div className={styles.toDoListItem}>
      <div className={styles.listItemInnerLeft}>
        <BaseCompleterInput data={data} func={updateItem} date={date} />
        <div
          style={{
            marginLeft: "10px",
            width: "100%",
          }}
          onClick={() => openEditingMenu(data)}
        >
          <p className={completed ? styles.completedName : ""}>{data.name}</p>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <p style={{ fontSize: "12px" }}>{data.type} .</p>
            <p
              style={{
                fontSize: "12px",
                color: data.date == date ? "blue" : "black",
              }}
            >
              {data.date == date ? "Today" : data.date}
            </p>
          </div>
        </div>
      </div>
      <ChangerToImportant
        classes={styles.icon}
        updateItem={updateItem}
        id={data.id}
        data={data}
      />
    </div>
  );
};

export default TodoListItem;
