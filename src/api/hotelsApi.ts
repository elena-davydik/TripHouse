import { createInstanse } from "./instatse";

const api = createInstanse();

export const getPopularHotelsData = async () => {
  const { data } = await api.get("/popular");
  return data;
};

export const getHotelData = async (id: number | string) => {
  const { data } = await api.get(`/hotel/${id}`);
  return data;
};
