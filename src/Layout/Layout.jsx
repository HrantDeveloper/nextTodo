"use client";
import React from "react";
import Navbar from "@/app/components/navBar/Navbar";
import RightMenuBar from "@/app/components/rightMenuBar/RightMenuBar";
import { useGlobalContext } from "@/app/Context/store";

const Layout = ({ children }) => {
  const { menuBarIsOpen, menuBarData } = useGlobalContext();
  return (
    <>
      <Navbar />
      {children}
      {menuBarIsOpen && <RightMenuBar data={menuBarData} />}
    </>
  );
};

export default Layout;
