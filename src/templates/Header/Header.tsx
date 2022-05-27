import { useState } from "react";
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
import { SideMenu } from "../../organisms/SideMenu/SideMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const { isMobileSize } = useSize();

  const listArray = [
    {
      primary: "About",
      link: "about",
    },
    {
      primary: "Works",
      link: "works",
      offset:-100,
    },
    {
      primary: "Training",
      link: "training",
    },
    {
      primary: "SkillSet",
      link: "skillSet",
    },
  ];

  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }} id="top" className={styles.box}>
        <AppBar position="fixed" className={styles.appbar} color="default">
          <Toolbar className={styles.toolBar}>
            <Button size="large">
              <nav>
                <Scroll to="top" smooth={true}>
                  Mitsu's Portfolio
                </Scroll>
              </nav>
            </Button>
            {isMobileSize ? (
              <div className={styles.buttonsContainer}>
                {listArray.map((list: any) => (
                  <Button className={styles.button} key={list.link}>
                    <nav>
                      <Scroll to={list.link} smooth={true} offset={list.offset}>
                        {list.primary}
                      </Scroll>
                    </nav>
                  </Button>
                ))}
              </div>
            ) : (
              <IconButton
                color="inherit"
                className={styles.menu}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <MenuIcon />
                <SideMenu open={open} setOpen={setOpen} />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
