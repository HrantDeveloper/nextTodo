"use client";
import styles from "./../myDay.module.css";
import { BsThreeDots } from "react-icons/bs";
import TodoTable from "./../common/components/todoList/todoTable/TodoTable";
// import PageLoader from "./../common/components/pageLoader/PageLoader";
import { useGlobalContext } from "./../common/Context/store";
import { CiMenuBurger } from "react-icons/ci";

const Search:React.FC = () => {
  const { searchedData, setMediaMenuIsOpen } = useGlobalContext();

  return (
    <section
      className={styles.sectionMyDay}
      style={{backgroundColor:"#1434A4"}}
      >
      <CiMenuBurger
        className={styles.mediaMenu}
        onClick={() => setMediaMenuIsOpen((prev) => !prev)}
      />
      <header className={styles.header}>
        <div className={styles.icons}>
          <BsThreeDots className={styles.icon} />
        </div>
      </header>
      {/* {isLoading ? (
        <PageLoader />
      ) : ( */}
          <TodoTable tableData={searchedData} />
      {/* )} */}
    </section>
  );
};

export default Search;