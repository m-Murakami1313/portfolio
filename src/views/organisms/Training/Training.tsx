import { Box } from "@mui/material";
import styles from "./Training.module.scss";
import { Container } from "@mui/system";

import covidImage from "../../../images/covidtracker.png";
import prefecturesImage from "../../../images/prefecturesChart.png";
import movieListImage from "../../../images/movieList.png";

export const Training = () => {
  const trainingList = [
    {
      imgsrc: prefecturesImage,
      url: "https://m-murakami1313.github.io/PrefecturesCharts/",
      alt: "prefectures",
      title: "都道府県別人口増減数表",
      text: "外部APIからデータを取得し、折れ線グラフを表示する",
      codingLanguage: "使用言語 React/Typescript",
    },
    {
      imgsrc: covidImage,
      url: "https://m-murakami1313.github.io/COVID-19-Tracker/",
      alt: "COVID-19-Tracker",
      title: "COVID-19 Tracker",
      text: "外部APIからデータを取得し、表の作成及び棒グラフを表示",
      codingLanguage: "使用言語 React/Typescript",
    },
    {
      imgsrc: movieListImage,
      url: "https://m-murakami1313.github.io/MovieList/",
      alt: "MovieList",
      title: "MovieList",
      text: "外部APIからデータを取得し、画像データの表示",
      codingLanguage: "使用言語 React/Typescript",
    },
  ];

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
                <img src={list.imgsrc} className={styles.image} />
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
