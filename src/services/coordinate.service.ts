import AxiosInstance from "@/helpers/axios";
import { Api } from "@/interfaces/api";

const BASE_URL = `/geo/1.0/direct`
const API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHER


export const getCityCoordds = async (
  cityName: string,
  options: Api.CoordsApi.OptionQueryCoords
): Promise<Api.CoordsApi.ResponseQueryCoords> => {
  return await AxiosInstance.get(`${BASE_URL}?q=${cityName}&limit=${options.limit}&appid=${API_KEY}`);
};
