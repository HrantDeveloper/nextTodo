import Layout from "./../common/Layout/Layout";
import styles from "../page.module.css";
import Planned from "./Planned";
const PlannedPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <Planned/>
      </Layout>
    </main>
  );
};

export default PlannedPage;
