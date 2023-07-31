import axios from "axios";
import { url } from "../constants/url";
import { IDevice } from "../interfaces/IDevices";

export const getData = async (): Promise<IDevice[]> => {
  const response = await axios.get<IDevice[]>(url as string);
  return response.data;
};
