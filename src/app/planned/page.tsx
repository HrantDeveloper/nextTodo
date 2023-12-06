import Layout from "./../../Layout/Layout";
import styles from "../page.module.css";
import ToDoCtx from "../components/toDoCtx/ToDoCtx";
const PlannedPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <ToDoCtx page="planned" title="Planned" />
      </Layout>
    </main>
  );
};

export default PlannedPage;
