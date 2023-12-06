"use client";
import React, { useEffect, useState } from "react";
import styles from "./navBar.module.css";
import Link from "next/link";
import { navBarData } from "./../../config";
import { getQuantityData,searchData } from "./../../helpers/helpersForData";
import { useGlobalContext } from "./../../Context/store";
import { useRouter } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";

const Navbar:React.FC = () => {
  const [isActive, setIsActive] = useState("");
  const [itemQuantity, setItemQuantity] = useState<any>();
  const router = useRouter();
  const { stateIsChanged, setTableData, mediaMenuIsOpen, setMediaMenuIsOpen } =
    useGlobalContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageItem = window.localStorage.getItem("isAcvtiveId");
      localStorageItem && setIsActive(localStorageItem);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await getQuantityData();
      setItemQuantity(data);
    }
    fetchData();
  }, [stateIsChanged]);

  const handleSearcher = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value) {
      const data = await searchData(event.target.value);
      setTableData(data);
    }
  };

  const changeIsActive = (id:string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("isAcvtiveId", id);
    } else {
      return;
    }
  };

  return (
    <nav className={!mediaMenuIsOpen ? styles.nav : styles.navMedia}>
      {mediaMenuIsOpen && (
        <CiMenuBurger
          onClick={() => setMediaMenuIsOpen((prev:boolean) => !prev)}
        />
      )}

      <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          onClick={() => router.push("/search")}
          onChange={(e) => handleSearcher(e)}
        />
      </div>
      <div className={styles.navBarList}>
        {navBarData &&
          itemQuantity &&
          navBarData.map((item:navBarDataItemType, index:number) => 
          (
            <Link
              href={item.path}
              key={item.id}
              className={
                item.id == isActive
                  ? styles.navBarListItemIsActive
                  : styles.navBarListItem
              }
              onClick={() => {
                changeIsActive(item.id);
              }}
            >
              <div style={{ display: "flex" }}>
                {item.icon}
                <p style={{ marginLeft: "10px" }}>{item.title}</p>
              </div>
              <p style={{ width: "30px" }}>{itemQuantity && itemQuantity[index][1]}</p>
            </Link>
          )
          )}
      </div>
    </nav>
  );
};

export default Navbar;