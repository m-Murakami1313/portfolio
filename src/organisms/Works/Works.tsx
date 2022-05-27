import { Stack } from "@mui/material";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./Works.module.scss";
import image2 from "../../images/image2.jpg";

export const Works = () => {
  const firstContents = {
    title: "a",
    subheader: "b",
    image: image2,
    content: "content",
  };

  return (
    <div id="works">
      <h1 className={styles.h1}>Works</h1>
      <div className={styles.container}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          className={styles.stack}
          spacing={6}
        >
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            image={firstContents.image}
            content={firstContents.content}
          />
          <CardUI
            title={firstContents.title}
            subheader={firstContents.subheader}
            image={firstContents.image}
            content={firstContents.content}
          />
        </Stack>
      </div>
    </div>
  );
};
