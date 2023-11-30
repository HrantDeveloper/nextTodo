import Layout from "@/Layout/Layout";
import styles from "../page.module.css";
import ToDoCtx from "../components/toDoCtx/ToDoCtx";
const ImportantPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <ToDoCtx page="important" title="Important" />
      </Layout>
    </main>
  );
};

export default ImportantPage;
