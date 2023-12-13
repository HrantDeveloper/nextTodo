import Layout from "./../common/Layout/Layout";
import styles from "../page.module.css";
import Tasks from "./Tasks";
const AllTasksPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <Tasks/>
      </Layout>
    </main>
  );
};

export default AllTasksPage;
