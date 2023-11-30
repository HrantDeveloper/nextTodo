import Layout from "@/Layout/Layout";
import styles from "../page.module.css";
import ToDoCtx from "../components/toDoCtx/ToDoCtx";
const AllTasksPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <ToDoCtx page="tasks" title="Tasks" />
      </Layout>
    </main>
  );
};

export default AllTasksPage;
