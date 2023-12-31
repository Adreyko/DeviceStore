import axios from "axios";
import { url } from "../constants/url";
import { IDevice } from "../interfaces/IDevices";

export const postProduct = async (product: IDevice): Promise<string> => {
  const response = await axios.post<IDevice>(url as string, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.statusText;
};
