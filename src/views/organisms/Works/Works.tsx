import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./Works.module.scss";
import { worksContents } from "../../../libs/worksContents";

export const Works = () => {
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
          {worksContents.map((content) => (
            <Grid item className={styles.item}>
              <a href={content.url}>
                <CardUI
                  title={content.title}
                  image={content.image}
                  content={content.content}
                  deploy={content.deploy}
                />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
