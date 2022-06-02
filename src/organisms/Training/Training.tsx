import { Box } from "@mui/material";
import styles from "./Training.module.scss";

import image2 from "../../images/image2.jpg";

export const Training = () => {
  return (
    <div id="training">
      <h1 className={styles.h1}>Training</h1>
      {/* <div className={styles.container}> */}
      <Box className={styles.container}>
        <Box>
          <img src={image2} className={styles.image} />
        </Box>
        <Box>
          <img src={image2} className={styles.image} />
        </Box>
        <Box>
          <img src={image2} className={styles.image} />
        </Box>
        <Box>
          <img src={image2} className={styles.image} />
        </Box>
        <Box>
          <img src={image2} className={styles.image} />
        </Box>
      </Box>
      {/* </div> */}
    </div>
  );
};
