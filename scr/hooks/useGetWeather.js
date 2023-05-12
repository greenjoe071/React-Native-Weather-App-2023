import React, { useState, useEffect } from "react"

import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'



export const useGetWeather = () => {

    const [weather, setWeather] = useState([])
    const [error, setError] = useState(null)
    // const [location, setLocation] = useState(null)
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError("Location permission was denied.")
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            // setLocation(location)
            await fetchWeatherData()
        })()
    }, [lat, lon])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
            const data = await res.json()
            setWeather(data)

        } catch (e) {
            setError('Could Not Fetch Weather Data')
        } 
    }
// console.log(location.coords.latitude)
    return [error, weather]
}