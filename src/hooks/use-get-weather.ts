/* eslint-disable @typescript-eslint/no-explicit-any */

import { Api } from "@/interfaces/api"
import { Common } from "@/interfaces/common"
import { getWeather } from "@/services/weather.service"

export default function useGetWeather() {
  const getWeatherInfo = async (coords: Common.Coords, options?: Api.WeatherApi.OptionsQueryCoords) => {
    try {
      const res = await getWeather(coords, options)
      return res
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return {
    getWeatherInfo,
  }
}
