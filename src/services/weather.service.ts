import AxiosInstance from "@/helpers/axios";
import { Api } from "@/interfaces/api";

const BASE_URL = `/data/2.5/weather`
const API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHER


export const getWeather = async (
  { lat, lon }: Api.WeatherApi.QueryCoords,
  options?: Api.WeatherApi.OptionsQueryCoords
): Promise<Api.WeatherApi.ResponseWeatherInfo> => {
  return await AxiosInstance.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&exlude=${options?.exlude}&units=${options?.units}`);
};
