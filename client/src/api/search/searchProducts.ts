import { searchUrl } from "@/constants/url";
import axios from "axios";

export const searchProduct = async (name: string) => {
  try {
    const products = await axios.get(`${searchUrl}${name}`);
    return products.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};
