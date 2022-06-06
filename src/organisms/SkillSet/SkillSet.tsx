import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./SkillSet.module.scss";
import htmlLogo from "../../images/HTML5_Logo_128.png";
import tsLogo from "../../images/ts-logo-128.png";
import reactLogo from "../../images/react-2.png";
import nodejsLogo from "../../images/MiConv.com__nodejs-new-pantone-black.png";
import mysqlLogo from "../../images/logo-mysql.png";

export const SkillSet = () => {
  const skills = [
    {
      title: "HTML/CSS",
      image: htmlLogo,
      content: "content",
    },
    {
      title: "React",
      image: reactLogo,
      content: "content",
    },
    {
      title: "TypeScript",
      image: tsLogo,
      content: "content",
    },
    {
      title: "Node.js",
      image: nodejsLogo,
      content: "content",
    },
    {
      title: "MySQL",
      image: mysqlLogo,
      content: "content",
    },
  ];

  return (
    <div id="skillSet" className={styles.back}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.h1}>SkillSet</h1>
          <h2 className={styles.h2}>- 現在使用出来るスキル</h2>
        </div>
        <Box className={styles.container}>
          {skills.map((skill) => (
            <Box className={styles.item} key={skill.title}>
              <CardUI
                title={skill.title}
                content={skill.content}
                image={skill.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};
