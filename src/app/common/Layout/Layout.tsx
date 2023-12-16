"use client";
import React from "react";
import Navbar from "./../components/navBar/Navbar";
import RightMenuBar from "./../components/rightMenuBar/RightMenuBar";
import { useGlobalContext } from "./../Context/store";
import { getCurrentDate } from "../../helpers/heleperFuncs";
import { useCollection } from "../hooks/useCollection";
const Layout :React.FC <any>=  (
  { children}:any
  ) => { 
  const { menuBarIsOpen, menuBarData } = useGlobalContext();
  const {data} = useCollection("tasks");
      let myDayQuantity:{}[] = [];
      let importantQuantity:{}[] = [];
      let plannedQuantity:{}[] = [];
        data.map((item:any) => {
        if (item.important) {
          importantQuantity.push(item);
        } 
    
        if (item.type == "myDay") {
          if (item.date && item.date !== getCurrentDate("short")) {
            plannedQuantity.push(item);
          }
          myDayQuantity.push(item);
        } 
     
        else if (item.date && item.type == "planned") {
          if (item.date == getCurrentDate("short")) {
            plannedQuantity.push(item);
            myDayQuantity.push(item);
          } else {
            plannedQuantity.push(item);
          }
        } 
        else if (item.type == "tasks" && item.date  && item.date !== getCurrentDate("short")) {
          plannedQuantity.push(item);
        }
      });
      const quantityData = [
        ["myDay", myDayQuantity.length],
        ["important", importantQuantity.length],
        ["planned", plannedQuantity.length],
        ["tasks", data.length],
      ];
  return (
    <>
      <Navbar  navBarQuantity = {quantityData}/>
      {children}
      {menuBarIsOpen && menuBarData && <RightMenuBar data={menuBarData} />}
    </>
  );
};

export default Layout;
