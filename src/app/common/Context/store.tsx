"use client";
import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ContextProps={
  // isLoading:boolean,
  // setIsLoading:Dispatch<SetStateAction<boolean>>,
  menuBarIsOpen:boolean,
  setMenuBarIsOpen:Dispatch<SetStateAction<boolean>>,
  menuBarData:itemDataType |null ,
  setMenuBarData:Dispatch<SetStateAction<itemDataType| null>>,
  searchedData: any,
  setSearchedData:Dispatch<SetStateAction< any>>,
  mediaMenuIsOpen:boolean,
  setMediaMenuIsOpen:Dispatch<SetStateAction<boolean>>,
}

    const GlobalContext = createContext<ContextProps>({
    // isLoading:false,
    // setIsLoading:():boolean =>true,
    menuBarIsOpen:false,
    setMenuBarIsOpen:():boolean =>true,
    menuBarData:null,
    setMenuBarData:():any=>{},
    searchedData:[],
    setSearchedData:():[]=>[],
    mediaMenuIsOpen:false,
    setMediaMenuIsOpen:():boolean =>true ,
  })

export const GlobalContextProvider :React.FC <{children:React.ReactNode}>= ({ children }) => {

  const [menuBarIsOpen, setMenuBarIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [menuBarData, setMenuBarData] = useState<itemDataType | null>(null);
  const [searchedData, setSearchedData] = useState<any>([]);
  const [mediaMenuIsOpen, setMediaMenuIsOpen] = useState(false);

  const contextValue:ContextProps = {
    // isLoading,
    // setIsLoading,
    menuBarIsOpen,
    setMenuBarIsOpen,
    menuBarData,
    setMenuBarData,
    searchedData,
    setSearchedData,
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
