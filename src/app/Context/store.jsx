"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [stateIsChanged, setStateIsChanged] = useState(true);
  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [menuBarData, setMenuBarData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [navLinkIsActive, setNavLinkIsActive] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        stateIsChanged,
        setStateIsChanged,
        menuBarIsOpen,
        setMenuBarIsOpen,
        menuBarData,
        setMenuBarData,
        tableData,
        setTableData,
        navLinkIsActive,
        setNavLinkIsActive,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
