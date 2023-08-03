"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/HeaderElements/Header/Header";
import CarouselComponent from "@/components/CarouselComponent/CarouselComponent";
import Footer from "@/components/Footer/Footer";
import { IDevice } from "@/interfaces/IDevices";
import { useAppDispatch } from "@/redux/hooks/redux-hook";
import { setDevices } from "@/redux/slices/storeSlice";

const Main: React.FC = ({ devices }: IDevice[] | any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setDevices(devices));
  }, [dispatch, devices]);

  return (
    <>
     
      <CarouselComponent />
  
    </>
  );
};

export default Main;
