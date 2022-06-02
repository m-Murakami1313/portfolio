import { Box } from "@mui/system";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <div>
      <div className={styles.heading}>
      <h1 className={styles.h1} id="about">
        About
      </h1>
      <h2 className={styles.h2}>- 自己紹介</h2>
      </div>
      <Box className={styles.about}>
        <article>
          <h3>Mitsunobu Murakami</h3>
          <h4>埼玉県出身</h4>
          <p>食品専攻の大学を卒業後、地元の食品企業に就職</p>
          <p>
            システムエンジニアとして働いている兄の影響を受け、プログラミングの学習を開始
          </p>
          <p>
            コードを書く楽しさ、想像したことが画面に表現出来る面白さからそのままプログラミングにハマり、学習を継続
          </p>
          <p>
            モダンなフロントエンド開発ができるエンジニアを目指し
            日々勉強中です。
          </p>
        </article>
      </Box>
    </div>
  );
};
