import { Stack } from "@mui/material";
import styles from "./Training.module.scss";

import image2 from "../../images/image2.jpg";

export const Training = () => {
  return (
    <div>
      <h1 className={styles.h1}>Training</h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        className={styles.stack}
        spacing={6}
      >
        <img src={image2} className={styles.image}/>
      </Stack>
    </div>
  );
};
