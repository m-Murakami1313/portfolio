import styles from "./Body.module.scss";
import { Works } from "../../organisms/Works/Works";
import { About } from "../../organisms/About/About";
import { Training } from "../../organisms/Training/Training";
import { SkillSet } from "../../organisms/SkillSet/SkillSet";


export const Body = () => {
  return (
    <div className={styles.body}>
        <About  />
        <Works />
        <Training />
        <SkillSet />
    </div>
  );
};
