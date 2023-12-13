"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { getCurrentDate } from "../../helpers/heleperFuncs";

type ContextProps={
  dateLarge:string;
  dateShort:string;
  isLoading:boolean,
  setIsLoading:Dispatch<SetStateAction<boolean>>,
  stateIsChanged:boolean,
  setStateIsChanged:Dispatch<SetStateAction<boolean>>,
  menuBarIsOpen:boolean,
  setMenuBarIsOpen:Dispatch<SetStateAction<boolean>>,
  menuBarData:itemDataType |null ,
  setMenuBarData:Dispatch<SetStateAction<itemDataType| null>>,
  // tableData: itemDataType [],
  // setTableData:Dispatch<SetStateAction<itemDataType []>>,
  tableData: any,
  setTableData:Dispatch<SetStateAction< any>>,
  mediaMenuIsOpen:boolean,
  setMediaMenuIsOpen:Dispatch<SetStateAction<boolean>>,
}

    const GlobalContext = createContext<ContextProps>({
    dateLarge:"",
    dateShort:"",
    isLoading:false,
    setIsLoading:():boolean =>true,
    stateIsChanged:true,
    setStateIsChanged:():boolean =>false,
    menuBarIsOpen:false,
    setMenuBarIsOpen:():boolean =>true,
    menuBarData:null,
    setMenuBarData:():any=>{},
    tableData:[],
    setTableData:():[]=>[],
    mediaMenuIsOpen:false,
    setMediaMenuIsOpen:():boolean =>true ,
  })

export const GlobalContextProvider :React.FC <{children:React.ReactNode}>= ({ children }) => {
  const [stateIsChanged, setStateIsChanged] = useState(true);
  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menuBarData, setMenuBarData] = useState<itemDataType | null>(null);
  // const [tableData, setTableData] = useState<[]|itemDataType []>([]);
  const [tableData, setTableData] = useState<any>([]);
  const [mediaMenuIsOpen, setMediaMenuIsOpen] = useState(false);
  const dateLarge = getCurrentDate("long");
  const dateShort = getCurrentDate("short");

  const contextValue:ContextProps = {
    dateLarge,
    dateShort,
    isLoading,
    setIsLoading,
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
  }
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
