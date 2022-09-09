import { Grid } from "@mui/material";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./Works.module.scss";
import portfolioImage from "../../../images/portfolio.png";
import { Container } from "@mui/system";

export const Works = () => {
  const firstContents = {
    title: "ポートフォリオ",
    image: portfolioImage,
    content: "content",
    url: "https://m-murakami1313.github.io/portfolio/",
  };

  return (
    <div id="works" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>Works</h1>
          <h2 className={styles.h2}>- 作成した作品</h2>
        </div>
        <Grid
          container
          className={styles.container}
          spacing={6}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item className={styles.item}>
            <a href={firstContents.url}>
              <CardUI
                title={firstContents.title}
                image={firstContents.image}
                content={firstContents.content}
              />
            </a>
          </Grid>
          <Grid item className={styles.item}>
            <CardUI
              title={firstContents.title}
              image={firstContents.image}
              content={firstContents.content}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
