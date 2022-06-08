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
          <Box className={styles.imageBox}>
            {/* <a href=""> */}
            <img src={image2} className={styles.image} />
            <div className={styles.imageText}>
              <p className={styles.title}>人口</p>
              <div className={styles.contents}>
                <p>外部APIからデータを取得し、折れ線グラフを表示する</p>
                <p>使用言語 React/Typescript</p>
              </div>
            </div>
            {/* </a> */}
          </Box>
          <Box className={styles.imageBox}>
            {/* <a href=""> */}
            <img src={image2} className={styles.image} />
            <div className={styles.imageText}>
              <p className={styles.title}>人口</p>
              <div className={styles.contents}>
                <p>外部APIからデータを取得し、折れ線グラフを表示する</p>
                <p>使用言語 React/Typescript</p>
              </div>
            </div>
            {/* </a> */}
          </Box>
          <Box className={styles.imageBox}>
            {/* <a href=""> */}
            <img src={image2} className={styles.image} />
            <div className={styles.imageText}>
              <p className={styles.title}>人口</p>
              <div className={styles.contents}>
                <p>外部APIからデータを取得し、折れ線グラフを表示する</p>
                <p>使用言語 React/Typescript</p>
              </div>
            </div>
            {/* </a> */}
          </Box>
        </Box>
      </Container>
    </div>
  );
};
