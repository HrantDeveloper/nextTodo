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
  const [mediaMenuIsOpen, setMediaMenuIsOpen] = useState("");

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
        mediaMenuIsOpen,
        setMediaMenuIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
