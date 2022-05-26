import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import styles from "./Header.module.scss";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }} className={styles.box}>
        <AppBar position="fixed" className={styles.appbar} color="default">
          <Toolbar className={styles.toolBar}>
            {/* <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton> */}
            <Button size="large">News</Button>
            <div className={styles.buttonsContainer}>
              <Button className={styles.button}>About</Button>
              <Button className={styles.button}>Works</Button>
              <Button className={styles.button}>Traning</Button>
              <Button className={styles.button}>SkillSets</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
