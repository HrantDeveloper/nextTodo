import { memo } from "react";
import styles from "./pageLoader.module.css"

const PageLoader:React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
  );
};

export default memo(PageLoader);
