/* eslint-disable @typescript-eslint/no-empty-object-type */
import { City } from "./city"
import { Common } from "./common"
import { Weather } from "./weather"

/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace Api {

  namespace CoordsApi {

    interface OptionQueryCoords {
      limit: number
    }

    type ResponseQueryCoords = City.Detail[]
  }

  namespace WeatherApi {

    interface QueryCoords extends Common.Coords {
    }

    interface OptionsQueryCoords {
      exlude?: string
      units: string
    }

    interface ResponseWeatherInfo extends Weather.Detail {
    }
  }
}