/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import SearchPanel from "./components/search-panel";
import SearchResults from "./components/search-results";
import useGetLatLng from "./hooks/use-get-lat-lng";
import useGetWeather from "./hooks/use-get-weather";
import { Weather } from "./interfaces/weather";
import { useSearchHistoryStore } from "./stores/use-search-history";
import moment from "moment";
import { useHandleRouter } from "./hooks/use-handle-router";
import ScreenModeToggle from "./components/screen-mode";


function App() {
  const { getLatLng, errorGetLatLng } = useGetLatLng()
  const { query } = useHandleRouter()
  const [searchResults, setSearchResults] = useState<Weather.Detail>()
  const [isLoadingResults, setIsLoadingResults] = useState(false)
  const { pushNewHistory } = useSearchHistoryStore()
  const { getWeatherInfo } = useGetWeather()

  const handleSearch = async (cityName: string) => {
    try {
      setIsLoadingResults(true)
      setSearchResults(undefined)
      const res = await getLatLng(cityName)
      if (!res) throw new Error('City not found')
      const cityInfo = res[0]


      const { lat, lon } = cityInfo
      const weatherInfo = await getWeatherInfo({ lat, lon }, {
        units: 'metric',
        exlude: 'minutely,hourly,daily,alerts'
      })
      if (!weatherInfo) throw new Error('Weather info not found')
      pushNewHistory({
        id: weatherInfo.id,
        city: cityInfo.name,
        country: weatherInfo.sys.country,
        timestamp: moment().format('DD-MM-YYYY hh:mm A')
      })
      setSearchResults({
        ...weatherInfo,
        name: cityInfo.name
      })
    } catch (error: any) {
      console.log(error);
      setSearchResults(undefined)
    } finally {
      setIsLoadingResults(false)
    }
  }

  useEffect(() => {
    if (query.city) handleSearch(query.city)
  }, [query.city])

  return (
    <main className=" w-full min-h-screen bg-light-mode dark:bg-dark-mode object-cover bg-no-repeat py-10">
      <div className="max-w-[700px] w-full px-5 md:px-3 mx-auto">
        <SearchPanel
          handleSearch={handleSearch}
        />
        {errorGetLatLng && <p className="text-red-600 text-base font-medium mt-4 block w-full bg-red-200/50 px-4 py-3 rounded-md">Not found</p>}
        <SearchResults
          searchResults={searchResults}
          isLoadingResults={isLoadingResults}
        />
      </div>
      <ScreenModeToggle />
    </main >
  )
}

export default App
