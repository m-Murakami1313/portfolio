import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./SkillSet.module.scss";

export const SkillSet = () => {
  const firstContents = {
    title: "a",
    subheader: "b",
    content: "content",
  };

  return (
    <div id="skillSet" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>SkillSet</h1>
          <h2 className={styles.h2}>- 現在使用出来るスキル</h2>
        </div>
        <Box className={styles.container}>
          <Box className={styles.item}>
            <CardUI
              title={firstContents.title}
              subheader={firstContents.subheader}
              content={firstContents.content}
            />
          </Box>
          <Box className={styles.item}>
            <CardUI
              title={firstContents.title}
              subheader={firstContents.subheader}
              content={firstContents.content}
            />
          </Box>
          <Box className={styles.item}>
            <CardUI
              title={firstContents.title}
              subheader={firstContents.subheader}
              content={firstContents.content}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};
