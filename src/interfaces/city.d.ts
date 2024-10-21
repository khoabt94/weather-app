/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace City {


  interface Detail {
    name: string,
    local_names: { [key: string]: string }
    lat: number,
    lon: number,
    country: string,
    state: string
  }

}