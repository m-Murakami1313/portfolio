import { Grid } from "@mui/material";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./Works.module.scss";
import image2 from "../../images/image2.jpg";

export const Works = () => {
  const firstContents = {
    title: "a",
    subheader: "b",
    image: image2,
    content: "content",
  };

  return (
    <div id="works">
      <h1 className={styles.h1}>Works</h1>
      <Grid
        container
        className={styles.container}
        spacing={6}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            image={firstContents.image}
            content={firstContents.content}
          />
        </Grid>
        <Grid item>
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            image={firstContents.image}
            content={firstContents.content}
          />
        </Grid>
      </Grid>
    </div>
  );
};
