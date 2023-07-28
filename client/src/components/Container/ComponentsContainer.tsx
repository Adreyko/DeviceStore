import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ComponentsContainerProps {
  children: ReactNode;
}

const ComponentsContainer: React.FC<ComponentsContainerProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

export default ComponentsContainer;
