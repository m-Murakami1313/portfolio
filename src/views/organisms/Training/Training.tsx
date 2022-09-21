import { Box } from "@mui/material";
import styles from "./Training.module.scss";
import { Container } from "@mui/system";

import { trainingList } from "../../../libs/traningsContents";

export const Training = () => {
  return (
    <div id="training" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Traning</h1>
          <h2 className={styles.h2}>- 勉強で作成した作品</h2>
        </div>
        <Box className={styles.container}>
          {trainingList.map((list) => (
            <Box className={styles.imageBox}>
              <a href={list.url}>
                <img
                  src={list.imgsrc}
                  alt={list.alt}
                  className={styles.image}
                />
                <div className={styles.imageText}>
                  <p className={styles.title}>{list.title}</p>
                  <div className={styles.contents}>
                    <p>{list.text}</p>
                    <p>{list.codingLanguage}</p>
                  </div>
                </div>
              </a>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};
