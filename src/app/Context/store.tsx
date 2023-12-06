"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ContextProps={
  stateIsChanged:boolean,
  setStateIsChanged:Dispatch<SetStateAction<boolean>>,
  menuBarIsOpen:boolean,
  setMenuBarIsOpen:Dispatch<SetStateAction<boolean>>,
  menuBarData:itemDataType |{} ,
  setMenuBarData:Dispatch<SetStateAction<object>>,
  // tableData: itemDataType [],
  // setTableData:Dispatch<SetStateAction<itemDataType []>>,
  tableData: any,
  setTableData:Dispatch<SetStateAction< any>>,
  mediaMenuIsOpen:boolean,
  setMediaMenuIsOpen:Dispatch<SetStateAction<boolean>>,
}

    const GlobalContext = createContext<ContextProps>({
    stateIsChanged:true,
    setStateIsChanged:():boolean =>false,
    menuBarIsOpen:false,
    setMenuBarIsOpen:():boolean =>true,
    menuBarData:{completed:{
      boolean:false,
      date:""
  },
  date:"",
  id:"",
  important:false,
  name:"",
  type:""},
    setMenuBarData:():any=>{},
  //   tableData:[{completed:{
  //     boolean:false,
  //     date:""
  // },
  // date:"",
  // id:"",
  // important:false,
  // name:"",
  // type:""}],
  //   setTableData:():itemDataType[]=>[],
  tableData:[],
  setTableData:():[]=>[],
    mediaMenuIsOpen:false,
    setMediaMenuIsOpen:():boolean =>true ,



  })

export const GlobalContextProvider :React.FC = ({ children }) => {
  const [stateIsChanged, setStateIsChanged] = useState(true);
  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  const [menuBarData, setMenuBarData] = useState<{}|itemDataType>({});
  // const [tableData, setTableData] = useState<[]|itemDataType []>([]);
  const [tableData, setTableData] = useState<any>([]);
  const [mediaMenuIsOpen, setMediaMenuIsOpen] = useState(false);


  const contextValue:ContextProps = {
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
