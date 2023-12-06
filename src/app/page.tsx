import ToDoCtx from "./components/toDoCtx/ToDoCtx";
import styles from "./page.module.css";

import Layout from "./../Layout/Layout";

export default function Home(){
  return (
    <main className={styles.main}>
      <Layout>
        <ToDoCtx page="myDay" title="My Day" />
      </Layout>
    </main>
  );
}
