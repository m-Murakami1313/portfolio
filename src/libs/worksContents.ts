import portfolioImage from "../images/portfolio.png";
import recipeListImage from "../images/recipeList.png";

export const worksContents = [
  {
    title: "レシピ作成アプリ",
    image: recipeListImage,
    content: "使用技術:Next.js,typescript,tailwind,prisma,docker",
    deploy:"デプロイ先:Vercel,supabase(postgres)",
    url: "https://recipe-list-bbm5rhmzn-m-murakami1313.vercel.app/",
  },
  {
    title: "ポートフォリオ",
    image: portfolioImage,
    content: "使用技術:React,typescript,docker",
    deploy:"デプロイ先:GithubPages",
    url: "https://m-murakami1313.github.io/portfolio/",
  },
];
