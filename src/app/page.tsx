
import styles from "./page.module.css";
import Layout from "./common/Layout/Layout";
import MyDay from "./MyDay";

export default function Home(){
  return (
    <main className={styles.main}>
      <Layout>
        <MyDay/>
      </Layout>
    </main>
  );
}
