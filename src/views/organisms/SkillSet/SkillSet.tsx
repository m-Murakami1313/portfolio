import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./SkillSet.module.scss";
import { skills } from "../../../libs/skillsData";

export const SkillSet = () => {


  return (
    <div id="skillSet" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>SkillSet</h1>
          <h2 className={styles.h2}>- 現在使用出来るスキル</h2>
        </div>
        <Box className={styles.container}>
          {skills.map((skill) => (
            <Box className={styles.item} key={skill.title}>
              <CardUI
                title={skill.title}
                content={skill.content}
                image={skill.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};
