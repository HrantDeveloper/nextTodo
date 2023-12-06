"use client";
import React from "react";
import Navbar from "./../app/components/navBar/Navbar";
import RightMenuBar from "./../app/components/rightMenuBar/RightMenuBar";
import { useGlobalContext } from "./../app/Context/store";

const Layout :React.FC <any>=  (
  { children}:any
  ) => {
  const { menuBarIsOpen, menuBarData } = useGlobalContext();
  return (
    <>
      <Navbar />
      {children}
      {menuBarIsOpen && menuBarData && <RightMenuBar data={menuBarData} />}
    </>
  );
};

export default Layout;
