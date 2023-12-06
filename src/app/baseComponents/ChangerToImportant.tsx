"use client";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const ChangerToImportant :React.FC<{classes:string,updateItem:any,id:string,data:itemDataType}>= ({ classes, updateItem, id, data }) => {
  return (
    <div
      style={{ width: "40px", height: "100%" }}
      onClick={() =>
        updateItem(id, {
          ...data,
          important: !data.important,
          type: data.type !== "important" ? "important" : "tasks",
        })
      }
    >
      {data.important ? (
        <FaStar className={classes} />
      ) : (
        <CiStar className={classes} />
      )}
    </div>
  );
};

export default ChangerToImportant;
