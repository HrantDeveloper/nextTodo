import Layout from "./../common/Layout/Layout";
import styles from "../page.module.css";
import Important from "./Important";
const ImportantPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <Important/>
      </Layout>
    </main>
  );
};

export default ImportantPage;
