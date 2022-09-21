import covidImage from "../images/covidtracker.png";
import prefecturesImage from "../images/prefecturesChart.png";
import movieListImage from "../images/movieList.png";

export const trainingList = [
  {
    imgsrc: prefecturesImage,
    url: "https://prefectures-chart-4bx1abrme-m-murakami1313.vercel.app/",
    alt: "prefectures",
    title: "都道府県別人口増減数表",
    text: "外部APIからデータを取得し、折れ線グラフを表示する",
    codingLanguage: "使用技術 Nextjs/Typescript Docker GithubActions",
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
