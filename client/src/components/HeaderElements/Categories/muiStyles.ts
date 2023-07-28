import { makeStyles } from "@mui/styles";
export const headerMenuStyles = {
  display: { xs: "none", lg: "block" },
  cursor: "pointer",
  color: "gray",
  ":hover": { color: "white" },
  paddingBottom: "0px",

};

export const dropDownStyles = {
  cursor: "pointer",
  padding: "5px",
  color: "gray",
  background: "black",
  ":hover": { color: "white", background: "black" },
};

export const brandNameStyle = {
  display: {
    xs: "none",
    md: "block",
  },
  color: "white",
  cursor: "pointer",
};

export const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});
