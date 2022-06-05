import { Box } from "@mui/material";
import styles from "./Training.module.scss";

import image2 from "../../images/image2.jpg";
import { Container } from "@mui/system";

export const Training = () => {
  return (
    <div id="training" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Traning</h1>
          <h2 className={styles.h2}>- 勉強で作成した作品</h2>
        </div>
        <Box className={styles.container}>
          <Box>
            <a href="">
              <img src={image2} className={styles.image} />
            </a>
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
      </Container>
    </div>
  );
};
