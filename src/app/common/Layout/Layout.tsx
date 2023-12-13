"use client";
import React from "react";
import Navbar from "./../components/navBar/Navbar";
import RightMenuBar from "./../components/rightMenuBar/RightMenuBar";
import { useGlobalContext } from "./../Context/store";
import { getQuantityData } from "../../helpers/helpersForData";
import { useEffect,useState } from "react";
const Layout :React.FC <any>=  (
  { children}:any
  ) => {
  const [itemQuantity, setItemQuantity] = useState<any>();  
  const { menuBarIsOpen, menuBarData,dateShort,stateIsChanged } = useGlobalContext();
  
  useEffect(() => {
    async function fetchData() {
      const data:any = await getQuantityData();
      let myDayQuantity:{}[] = [];
      let importantQuantity:{}[] = [];
      let plannedQuantity:{}[] = [];
        data.map((item:any) => {
        if (item.important) {
          importantQuantity.push(item);
        } 
    
        if (item.type == "myDay") {
          if (item.date && item.date !== dateShort) {
            plannedQuantity.push(item);
          }
          myDayQuantity.push(item);
        } 
     
        else if (item.date && item.type == "planned") {
          if (item.date == dateShort) {
            plannedQuantity.push(item);
            myDayQuantity.push(item);
          } else {
            plannedQuantity.push(item);
          }
        } 
        else if (item.type == "tasks" && item.date  && item.date !== dateShort) {
          plannedQuantity.push(item);
        }
      });
      const quantityData = [
        ["myDay", myDayQuantity.length],
        ["important", importantQuantity.length],
        ["planned", plannedQuantity.length],
        ["tasks", data.length],
      ];
      setItemQuantity(quantityData);
    }
    fetchData();
  }, [stateIsChanged]);

  return (
    <>
      <Navbar  navBarQuantity = {itemQuantity}/>
      {children}
      {menuBarIsOpen && menuBarData && <RightMenuBar data={menuBarData} />}
    </>
  );
};

export default Layout;
