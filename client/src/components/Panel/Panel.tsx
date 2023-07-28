import { Box, Typography } from "@mui/material";
import React from "react";
import Sort from "../Products/Sort/Sort";
import { styles } from "../Products/styles/muiStyles";
type Panel = {
  currentPageId: string;
  sortedBy: string;
  setSortedBy: any;
};
const Panel: React.FC<Panel> = ({ currentPageId, sortedBy, setSortedBy }) => {
  return (
    <><Box sx={styles.boxStyles3}>
      <Typography
        component="div"
        variant="h5"
        color={"white"}
        sx={{ padding: "20px" }}
      >
        {currentPageId.toUpperCase()}
      </Typography>
      <Sort sortBy={sortedBy} setSortedBy={setSortedBy} />
      </Box>
    </>
  );
};

export default Panel;
