import axios from "axios";

export const getProduct = async (id: string) => {
  const data = await axios.get(`http://localhost:3001/products/${id}`);
  return data.data
};
