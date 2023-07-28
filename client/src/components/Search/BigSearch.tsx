import { AppBar, Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import SearchInput from "./SearchInput/SearchInput";
interface IProps {
  openSearch: boolean;
  setOpenSearch: (value: boolean | ((prevVisible: boolean) => boolean)) => void;
}
const BigSearch = ({ openSearch, setOpenSearch }: IProps) => {
  if (!openSearch) return null;
  return (
    <>
      <Typography
        onClick={() => setOpenSearch(false)}
        component="div"
        position="fixed"
        sx={{
          width: "100%",
          inset: "0",
          backdropFilter: "blur(4px)",
          zIndex: "10",
          backgroundColor: "transparent",
        }}
      >
        <Typography
          onClick={(e) => e.stopPropagation()}
          component="div"
          sx={{
            color: "white",
            zIndex: "20",
            boxShadow: "-moz-initial",
            marginTop: "4%",
          }}
        >
          <SearchInput />
        </Typography>
      </Typography>
    </>
  );
};

export default BigSearch;
