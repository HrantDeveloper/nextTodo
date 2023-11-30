"use client";
import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useRef, useState } from "react";
import {
  getCurrentDate,
  getNextWeekDate,
  getTomorrowsDate,
} from "@/app/helpers/heleperFuncs";
import styles from "./dateChanger.module.css";
import { dateChangerTypesData } from "@/app/config";

const DateChanger = ({
  data,
  updateItem,
  calendarIsOpen,
  setCalendarIsOpen,
}) => {
  const changedDateRef = useRef();
  const today = getCurrentDate("short");
  const tomorrow = getTomorrowsDate();
  const nextWeekDate = getNextWeekDate();
  const [dateChangerMenuIsOpen, setDateChangerMenuIsOpen] = useState(false);

  const dateChangerChooser = (dateChangerType) => {
    setDateChangerMenuIsOpen((prev) => !prev);
    if (dateChangerType == 1) {
      updateItem(data.id, {
        ...data,
        date: today,
      });
    } else if (dateChangerType == 2) {
      updateItem(data.id, {
        ...data,
        date: tomorrow,
      });
    } else if (dateChangerType == 3) {
      updateItem(data.id, {
        ...data,
        date: nextWeekDate,
      });
    } else {
      setCalendarIsOpen((prev) => !prev);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.dateArea}>
        <p onClick={() => setDateChangerMenuIsOpen((prev) => !prev)}>
          {data.date
            ? ` Due ${data.date == today ? "Today" : data.date}`
            : "Add due date"}
        </p>
        {data.date && (
          <IoIosClose
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
            onClick={() =>
              updateItem(
                data.id,
                {
                  ...data,
                  date: false,
                },
                "dateDeleter"
              )
            }
          />
        )}
      </div>
      {calendarIsOpen && (
        <input
          style={{ border: "none", width: "100px" }}
          type="date"
          lang="en"
          ref={changedDateRef}
          id="start"
          name="trip-start"
          // value="2018-07-22"
          min="2023-11-25"
          max="2123-12-31"
          onChange={() =>
            updateItem(
              data.id,
              {
                ...data,
                date:
                  changedDateRef.current.value && changedDateRef.current.value,
              },
              "date"
            )
          }
        />
      )}
      {dateChangerMenuIsOpen && (
        <div className={styles.appearedDiv}>
          <div className={styles.chooseDateVariants}>
            {dateChangerTypesData.map((item) => (
              <div
                key={item.id}
                className={styles.chooseDateVariant}
                onClick={() => dateChangerChooser(item.id)}
              >
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateChanger;
