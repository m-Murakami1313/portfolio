import { Box } from "@mui/material";

import { CardUI } from "../../UI/Card/CardUI";
import { Chart } from "../../UI/Chart/Chart";
import styles from "./SkillSet.module.scss";

export const SkillSet = () => {
  const firstContents = {
    title: "a",
    subheader: "b",
    content: "content",
  };

  return (
    <div id="skillSet">
      <h1 className={styles.h1}>SkillSet</h1>
      <Chart />
      <Box  className={styles.container}>
        <Box  className={styles.item}>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Box>
        <Box  className={styles.item}>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Box>
        <Box  className={styles.item}>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Box>
      </Box>
    </div>
  );
};
