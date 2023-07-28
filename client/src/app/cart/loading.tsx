"use client";
import React from "react";
import CirculLoading from "@/components/Loading/Loading";
import Header from "@/components/HeaderElements/Header/Header";
import Footer from "@/components/Footer/Footer";
const Loading = () => {
  return (
    <>
      <Header />
      <CirculLoading />
      <Footer />
    </>
  );
};

export default Loading;
