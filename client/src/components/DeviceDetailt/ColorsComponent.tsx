import React, { useState } from "react";
import { Paper } from "@mui/material";

type Colors = {
  id: string;
  colorId: string;
  setActiveId: any;
  activeId: any;
};

const ColorsComponent: React.FC<Colors> = ({
  id,
  colorId,
  setActiveId,
  activeId,
}) => {
  return (
    <>
      <Paper
        onClick={() => setActiveId(colorId)}
        sx={{
          width: { xs: "50px", xl: "30px" ,md:'30px'},
          marginLeft: "10px",
          borderRadius: "100%",
          height: { xs: "50px", xl: "30px" ,md:'30px'},
          background: `${colorId}`,
          cursor: "pointer",
          border: `${colorId === activeId ? "1px solid red" : "none"}`,
        }}
      ></Paper>
    </>
  );
};

export default ColorsComponent;
