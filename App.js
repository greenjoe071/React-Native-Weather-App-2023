
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
import { useGetWeather } from "./scr/hooks/useGetWeather";

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {


  // console.log(weather?.city?.name)


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