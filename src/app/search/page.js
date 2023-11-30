import Layout from "@/Layout/Layout";
import styles from "../page.module.css";
import ToDoCtx from "../components/toDoCtx/ToDoCtx";
const SearchPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <ToDoCtx page="search" title="Search" />
      </Layout>
    </main>
  );
};

export default SearchPage;
