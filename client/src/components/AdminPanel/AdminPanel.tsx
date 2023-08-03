"use client";
import React from "react";
import Panel from "./Panel/Panel";
import { Box } from "@mui/material";

const AdminPanel = () => {
  return (
      <Box sx={{ background: 'black', height: '1000vh' }} >
        <Panel />
      </Box>
  );
};

export default AdminPanel;
