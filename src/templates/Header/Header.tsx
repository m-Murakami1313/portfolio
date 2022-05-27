import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

import styles from "./Header.module.scss";
import { useSize } from "../../hooks/UseSize";

export const Header = () => {
  const { isMobileSize } = useSize();

  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }} id="header" className={styles.box}>
        <AppBar position="fixed" className={styles.appbar} color="default">
          <Toolbar className={styles.toolBar}>
            <Button size="large">
              <nav>
                <Scroll to="header" smooth={true}>
                  News
                </Scroll>
              </nav>
            </Button>
            {isMobileSize ? (
              <div className={styles.buttonsContainer}>
                <Button className={styles.button}>
                  <nav>
                    <Scroll to="about" smooth={true}>
                      About
                    </Scroll>
                  </nav>
                </Button>
                <Button className={styles.button}>
                  <Scroll to="works" smooth={true}>
                    Works
                  </Scroll>
                </Button>
                <Button className={styles.button}>
                  <Scroll to="training" smooth={true}>
                    Traning
                  </Scroll>
                </Button>
                <Button className={styles.button}>
                  <Scroll to="skillSet" smooth={true}>
                    SkillSet
                  </Scroll>
                </Button>
              </div>
            ) : (
              <IconButton color="inherit" className={styles.menu}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
