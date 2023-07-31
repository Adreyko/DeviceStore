import React from "react";
import DeviceDetail from "@/components/DeviceDetailt/DeviceDetail";
import { getProduct } from "@/api/getProduct";
const Accessory = async ({ params }: { params: { id: string } }) => {
  const products = await getProduct(params.id);
  return (
    <>
      <DeviceDetail product={products} />
    </>
  );
};

export default Accessory;
