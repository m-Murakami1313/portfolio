import styles from "./Body.module.scss";
import { Works } from "../../organisms/Works/Works";

export const Body = () => {
  return (
    <div className={styles.body}>
      <Works />
    </div>
  );
};
