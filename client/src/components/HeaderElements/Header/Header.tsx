"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Categories from "../Categories/Categories";
import Cart from "../CartHeader/Cart";
import { Container } from "@mui/material";
import BurgerMenu from "../BurgeMenu/BurgerMenu";
import SearchComponent from "../Search/Search";
import { useState } from "react";
import BigSearch from "@/components/Search/BigSearch";

export default function Header() {
  const [selectedCategories, setSelectedCategories] = useState<string | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openSearch,setOpenSearch] = useState(false)
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#191414", width: "100%" }}
      >
        <Container sx={{ flexGrow: 1, width: "100%" }} maxWidth="lg">
          <Toolbar sx={{ justifyContent: { sm: "space-between" } }}>
            <BurgerMenu />
            <Categories
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <SearchComponent
            setOpenSearch={setOpenSearch}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
            <Cart />
          </Toolbar>
        </Container>
      </AppBar>
      <BigSearch openSearch={openSearch} setOpenSearch={setOpenSearch}  />
    </>
  );
}
