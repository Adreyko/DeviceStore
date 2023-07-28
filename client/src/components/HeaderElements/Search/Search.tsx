import React from "react";
import {
  SearchIconWrapper,
  StyledInputBase,
} from "../Categories/contanst/muiStyles";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "../Categories/contanst/muiStyles";
import { handleMenuClose } from "../Categories/handlers/handleMenuClose";

const SearchComponent = ({
  setAnchorEl,
  setSelectedCategories,
  setOpenSearch,
}: any) => {
  return (
    <>
      <Search
        onClick={() => setOpenSearch((prev : boolean) => !prev)}
        sx={{ width: { xs: "70%", sm: "70%", lg: "20%" }, marginX: "20px" }}
        onMouseEnter={() => handleMenuClose(setSelectedCategories, setAnchorEl)}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          disabled={true}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
};

export default SearchComponent;
