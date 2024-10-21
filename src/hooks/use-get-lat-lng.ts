/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCityCoordds } from "@/services/coordinate.service"
import { useState } from "react";

export default function useGetLatLng() {
  const [errorGetLatLng, setErrorGetLatLng] = useState('')
  const getLatLng = async (cityName: string, options?: { limit: number }) => {
    try {
      const res = await getCityCoordds(cityName, {
        limit: options?.limit || 1,
      })
      if (!res || res.length === 0) throw new Error('City not found')
      setErrorGetLatLng('')
      return res
    } catch (error: any) {
      setErrorGetLatLng(error.message)
    }
  }

  return {
    getLatLng,
    errorGetLatLng
  }
}
