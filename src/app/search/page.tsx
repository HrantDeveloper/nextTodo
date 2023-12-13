import Layout from "./../common/Layout/Layout";
import styles from "../page.module.css";
import Search from "./Search";
const SearchPage = () => {
  return (
    <main className={styles.main}>
      <Layout>
        <Search/>
      </Layout>
    </main>
  );
};

export default SearchPage;
