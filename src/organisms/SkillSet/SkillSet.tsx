import { Chart } from "../../UI/Chart/Chart";
import styles from "./SkillSet.module.scss";

export const SkillSet = () => {
  return (
    <div id="skillSet">
      <h1 className={styles.h1}>SkillSet</h1>
      <Chart />
    </div>
  );
};
