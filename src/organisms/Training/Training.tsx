import { Grid } from "@mui/material";
import styles from "./Training.module.scss";

import image2 from "../../images/image2.jpg";

export const Training = () => {
  return (
    <div id="training">
      <h1 className={styles.h1}>Training</h1>
      <Grid
        container
        className={styles.container}
        spacing={3}
        columns={{ xs: 6, sm: 8, md: 12 }}
      >
        <Grid item>
          <img src={image2} className={styles.image} />
        </Grid>
        <Grid item>
          <img src={image2} className={styles.image} />
        </Grid>
        <Grid item>
          <img src={image2} className={styles.image} />
        </Grid>
        <Grid item>
          <img src={image2} className={styles.image} />
        </Grid>
        <Grid item>
          <img src={image2} className={styles.image} />
        </Grid>
      </Grid>
    </div>
  );
};
