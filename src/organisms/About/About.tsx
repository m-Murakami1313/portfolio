import { Box, Container } from "@mui/system";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <div className={styles.back} id="about">
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>About</h1>
          <h2 className={styles.h2}>- 自己紹介</h2>
        </div>
        <Box className={styles.about}>
          <article>
            <h3>Mitsunobu Murakami</h3>
            <h4>埼玉県出身</h4>
            <p>私立大学食品化学専攻を卒業後、埼玉県内の食品企業に就職</p>
            <p>
              システムエンジニアとして働いている兄の影響を受け、プログラミングの学習を開始
            </p>
            <p>
              コードを書く楽しさ、プログラミングの出来ることの多さからそのままプログラミングにハマり、学習を継続
            </p>
            <p>
              モダンなフロントエンド開発ができるエンジニアを目指し
              日々勉強中
            </p>
          </article>
        </Box>
      </Container>
    </div>
  );
};
