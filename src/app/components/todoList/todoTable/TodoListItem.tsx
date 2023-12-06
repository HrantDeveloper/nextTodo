"use client";
import React from "react";
import styles from "./toDoListItem.module.css";
import { getCurrentDate } from "./../../../helpers/heleperFuncs";
import { updateData } from "./../../../helpers/helpersForData";
import { useGlobalContext } from "./../../../Context/store";
import ChangerToImportant from "./../../../baseComponents/ChangerToImportant";
import BaseCompleterInput from "./../../../baseComponents/baseCompleterInput";

const TodoListItem:React.FC<{data:itemDataType}> = ({ data }) => {
  const date:string = getCurrentDate("short");
  const { setStateIsChanged, setMenuBarIsOpen, setMenuBarData, menuBarIsOpen } =
    useGlobalContext();

  const openEditingMenu = (data:object) => {
    setMenuBarData(data);
    if (!menuBarIsOpen) {
      setMenuBarIsOpen((prev) => !prev);
    }
  };

  const updateItem = async (id:string, newData:itemDataType) => {
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
          <p className={data.completed.boolean ? styles.completedName : ""}>{data.name}</p>
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
