
import React,{useState, useEffect} from "react"
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import CurrentWeather from "./scr/components/CurrentWeather";
import UpcomingWeather from "./scr/components/UpcomingWeather";

import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {

  // const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState([])
  const [error, setError] = useState(null)
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res  = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await res.json()
      setWeather(data)
    } catch (e) {
      setError('Could Not Fetch Weather Data')
    } 
   
  }  

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError("Location permission was denied.")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  },[lat, lon] )

  if (weather) {
    console.log(weather)
  }

return (
<View style={styles.container}>
  <CurrentWeather />
  {/* <UpcomingWeather /> */}
 
</View>
)
 
}


const styles = StyleSheet.create ({
  container: {
    flex: 1
  }

})
export default App