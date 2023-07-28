import { IDevice } from "@/interfaces/IDevices";
import axios from "axios";

export const sortData = async (currentPageId: string,sortedBy : string ) : Promise<IDevice[]> => {
  const res = await axios.get(
    `http://localhost:5000/device?category=${currentPageId}&_sort=price&_order=${sortedBy}`
  );
  return res.data;
};
