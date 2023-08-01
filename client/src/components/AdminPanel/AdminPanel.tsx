"use client";
import React from "react";

import Header from "@/components/HeaderElements/Header/Header";
import Panel from "./Panel/Panel";
import { Box } from "@mui/material";
import ComponentsContainer from "../Container/ComponentsContainer";
const AdminPanel = () => {
  return (
    <ComponentsContainer>
    <Box sx={{ background: 'black', height:'1000vh'}} >
      <Header />
      <Panel />
    </Box>
    </ComponentsContainer>
  );
};

export default AdminPanel;
