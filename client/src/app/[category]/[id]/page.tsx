import React from "react";

import DeviceDetail from "@/components/DeviceDetailt/DeviceDetail";
const Accessory = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <DeviceDetail id={params.id} />
    </>
  );
};

export default Accessory;
