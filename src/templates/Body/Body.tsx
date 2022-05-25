import styles from "./Body.module.scss";
import { Works } from "../../organisms/Works/Works";

export const Body = () => {
  return (
    <div className={styles.body}>
      <p>ABOUT</p>
      <Works />
      <p>training</p>
      <p>SKILLSET</p>
    </div>
  );
};
