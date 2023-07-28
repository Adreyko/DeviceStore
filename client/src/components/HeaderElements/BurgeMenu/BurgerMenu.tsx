import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, List } from "@mui/material";
import { headerMenu } from "../Categories/contanst/menu";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import Typography from "@mui/material/Typography";
const BurgerMenu: React.FC = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleOpen = () => {
    setOpenBurger((prev) => !prev);
  };

  const menuEl = headerMenu.map((el) => (
    <ListItem key={el.id}>
      <Link href={el.categoryId.toLocaleLowerCase()}>{el.category}</Link>
    </ListItem>
  ));
  return (
    <>
      <div onClick={handleOpen}>
        <MenuIcon sx={{ display: { md: "none" }, cursor: "pointer" }} />
      </div>
      <Drawer
        onClick={handleOpen}
        open={openBurger}
        sx={{ display: { md: "none" } }}
      >
        <List sx={{ background: "#191414", height: "100%", color: "white" }}>
          <Link href="/">
            <Typography component="h3" variant="h6" sx={{ paddingX: "15px" }}>
              Home
            </Typography>
          </Link>
          {menuEl}
        </List>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
