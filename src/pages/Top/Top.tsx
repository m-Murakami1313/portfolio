import { Container } from "@mui/system";
import React from "react";
import { Body } from "../../templates/Body/Body";
import { Header } from "../../templates/Header/Header";

import styles from "./Top.module.scss";

export const Top = () => {
  return (
      <Container className={styles.top}>
        <Header />
        <Body />
        <p>mailform</p>
      </Container>
  );
};
