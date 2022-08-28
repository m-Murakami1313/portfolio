import { Box } from "@mui/material";
import { Container } from "@mui/system";

import { CardUI } from "../../UI/Card/CardUI";
import styles from "./SkillSet.module.scss";
import htmlLogo from "../../images/HTML5_Logo_128.png";
import tsLogo from "../../images/ts-logo-128.png";
import reactLogo from "../../images/react-2.png";
import nodejsLogo from "../../images/MiConv.com__nodejs-new-pantone-black.png";
import mysqlLogo from "../../images/mysql.png";

export const SkillSet = () => {
  const skills = [
    {
      title: "HTML/CSS",
      image: htmlLogo,
      content: "一通りのコードは書けます。使用エディタはVisualStudioです。",
    },
    {
      title: "React",
      image: reactLogo,
      content:
        "基本的なhooks、カスタムフック、ReduxToolKitを使用出来ます。可読性が高いコードが書けるように日々勉強中。",
    },
    {
      title: "TypeScript",
      image: tsLogo,
      content: "基本的な型をあてることが出来ます。",
    },
    {
      title: "Node.js",
      image: nodejsLogo,
      content: "簡単なCRUD操作が出来ます。まだまだ勉強を始めたばかりです。",
    },
    {
      title: "MySQL",
      image: mysqlLogo,
      content:
        "学習サイト「SQL Bolt」にてSQL構文を勉強し、簡単な構文は書けます。現在はDB設計を勉強中しています。",
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
