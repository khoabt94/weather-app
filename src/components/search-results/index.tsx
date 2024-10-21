import { Weather } from "@/interfaces/weather";
import SearchHistory from "./search-history";
import formatCelsiusDegree from "@/helpers/format-degree";
import moment from "moment";
import SkeletonSearchResults from "./skeleton";

type SearchResultsProps = {
  searchResults: Weather.Detail | undefined
  isLoadingResults: boolean
}

export default function SearchResults({ searchResults, isLoadingResults }: SearchResultsProps) {
  return (
    <section className="bg-white/20 dark:bg-dark/20  w-full mt-[112px] rounded-[40px] relative md:px-10 md:py-[46px] p-5 border border-white dark:border-none">
      {isLoadingResults && <SkeletonSearchResults />}
      {searchResults ? (
        <>
          <img
            src={searchResults.main.temp > 30 ? "/assets/sun.png" : "/assets/cloud.png"}
            className="absolute top-0 right-5 -translate-y-1/3 md:size-[300px] size-[157px]"
          />

          <div className="">
            <h3 className="text-gray-900 text-base dark:text-white">Today's Weather</h3>
            <h1 className="md:text-[72px] text-[50px] font-extrabold text-primary leading-none mt-4 mb-2 dark:text-white">{formatCelsiusDegree(searchResults.main.temp)}</h1>
            <div className="flex items-center text-gray-900 text-base gap-x-3 dark:text-white">

              <h3>
                H: {formatCelsiusDegree(searchResults.main.temp_max)}
              </h3>

              <h3>
                L: {formatCelsiusDegree(searchResults.main.temp_min)}
              </h3>
            </div>
            <div className="flex items-center justify-between mt-2 text-base text-gray-600 dark:text-white relative">
              <p className=" font-extrabold">{`${searchResults.name}, ${searchResults.sys.country}`}</p>
              <p className="hidden md:block">{moment().format('DD-MM-YYYY hh:mm A')}</p>
              <p className="hidden md:block">Humidity: {searchResults.main.humidity}%</p>
              <p className="capitalize hidden md:block">{searchResults.weather[0]?.main || "Clouds"}</p>
              <div className="text-base text-gray-600 dark:text-white block md:hidden absolute bottom-0 right-0 text-right">
                <p className="capitalize ">{searchResults.weather[0]?.main || "Clouds"}</p>
                <p className="">Humidity: {searchResults.main.humidity}%</p>
                <p className="">{moment().format('DD-MM-YYYY hh:mm A')}</p>
              </div>
            </div>

          </div>
        </>
      ) : <></>}


      <SearchHistory />
    </section>
  )
}
