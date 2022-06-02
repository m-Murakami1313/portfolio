import { Box } from "@mui/material";
import styles from "./Training.module.scss";

import image2 from "../../images/image2.jpg";

export const Training = () => {
  return (
    <div id="training">
     <div className={styles.heading}>
        <h1 className={styles.h1}>Traning</h1>
        <h2 className={styles.h2}>- 勉強で作成した作品達</h2>
      </div>
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
