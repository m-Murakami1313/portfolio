import { memo } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link as Scroll } from "react-scroll";
import ListItemButton from "@mui/material/ListItemButton";

import styles from "./SideMenu.module.scss";

export const SideMenu = memo(({ setOpen, open }: any) => {
  const listArray = [
    {
      primary: "Top",
      link: "top",
    },
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
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <List className={styles.list}>
        {listArray.map((list) => (
          <div key={list.link}>
            <ListItem button divider>
              <ListItemButton>
                <nav>
                  <Scroll
                    to={list.link}
                    smooth={true}
                    onClick={() => {
                      setOpen(false);
                    }}
                    offset={list.offset}
                  >
                    <ListItemText
                      primary={list.primary}
                      primaryTypographyProps={{ color: "primary" }}
                    />
                  </Scroll>
                </nav>
              </ListItemButton>
            </ListItem>
          </div>
        ))}
      </List>
    </Drawer>
  );
});
