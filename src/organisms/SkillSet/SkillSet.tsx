import { Grid } from "@mui/material";

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
      <Grid
        container
        className={styles.container}
        spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Grid>
        <Grid item>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Grid>
        <Grid item>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            content={firstContents.content}
          />
        </Grid>
      </Grid>
      <Chart />
    </div>
  );
};
