import styles from "./Body.module.scss";
import { Works } from "../../organisms/Works/Works";
import { About } from "../../organisms/About/About";
import { Training } from "../../organisms/Training/Training";
import { SkillSet } from "../../organisms/SkillSet/SkillSet";
import { Container } from "@mui/system";

export const Body = () => {
  return (
    <div className={styles.body}>
      <Container>
        <About />
        <Works />
        <Training />
        <SkillSet />
      </Container>
    </div>
  );
};
