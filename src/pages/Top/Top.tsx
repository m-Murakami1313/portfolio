import { createTheme, ThemeProvider } from "@mui/material";
import { ThemeOptions } from "@mui/material";

import { Body } from "../../templates/Body/Body";
import { Header } from "../../templates/Header/Header";
import styles from "./Top.module.scss";

export const Top = () => {
  return (
    <div className={styles.top}>
      <Header />
      <Body />
    </div>
  );
};
