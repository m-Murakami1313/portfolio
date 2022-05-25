import { Stack } from "@mui/material";


import imageUrl1 from "../../images/和順商事株式会社.png";
import styles from "./Works.module.scss";

export const Works = () => {
  return (
    <div>
      <h1 className={styles.h1}>Works</h1>
      <div className={styles.container}>
        <Stack direction={{ xs: "column", sm: "row" }} className={styles.stack}>
          <img className={styles.img} src={imageUrl1} />
          <img className={styles.img} src={imageUrl1} />
        </Stack>
      </div>
      <div className={styles.container}>
        <Stack direction={{ xs: "column", sm: "row" }} className={styles.stack}>
          <img className={styles.img} src={imageUrl1} />
          <img className={styles.img} src={imageUrl1} />
        </Stack>
      </div>
    </div>
  );
};
