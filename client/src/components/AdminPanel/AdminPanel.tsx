"use client";
import React from "react";
import ComponentsContainer from "@/components/Container/ComponentsContainer";
import Header from "@/components/HeaderElements/Header/Header";
import Panel from "./Panel/Panel";

const AdminPanel = () => {
  return (
    <ComponentsContainer>
      <Header />
      <Panel />
    </ComponentsContainer>
  );
};

export default AdminPanel;
