import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons';

// import { PermissionsAndroid, Platform } from 'react-native';

// import axios from 'axios';
import { PermissionsAndroid, Platform } from 'react-native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

// Open weather
const API_KEY = "9018e2c400ad4157c522b6e3fcbea1ae";

//Today's Date
const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${month} ${date}, ${year}`
}

const App = () => {

  //lOCATION AND WEATHER
  // const [latitude, setLatitude ] = useState('')
  // const [ longitude, setLongitude ] = useState('')
  // const [ city, setCity ] = useState('')
  // const [temp, setTemp ] = useState('')
  // const [weatherIcon, setWeatherIcon ] = useState('')


  // let options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0
  // };

  // function success(pos) {
  //   let crd = pos.coords;
  //   console.log('Successfully determined a user position:', crd);

  //   setLatitude(crd.latitude);
  //   setLongitude(crd.longitude);

  // }

  // function error(err) {

  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);

  // useEffect(() => {

  //   navigator.geolocation.getCurrentPosition(async() => {

  //    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`)
  //       .then(res => {
  //         console.log("Getting weather info", res.data)
  //         console.log("city:", res.data.name, "temp:", res.data.main.temp, "icon:", res.data.weather[0].icon,)
  //          setCity(res.data.name)
  //         setTemp(res.data.main.temp)
  //        setWeatherIcon(res.data.weather[0].icon)



  //       })
  //       .catch(err => console.log(err))
  //   })
  // });



  // Current Time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (

    <ImageBackground source={require('./assets/blue-bg.png')} style={styles.image}>
      <SafeAreaView>
        <View style={styles.container}>

          <TextInput
            style={styles.textInput}
            placeholder="Enter city name..."
            placeholderTextColor={'#000'}
          />
          <View>
            <Text style={{color: "white"}}>{`${dateBuilder(new Date())}`} {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} {"\n"}</Text>
          </View>
          <Text style={{ color: "white", fontSize: 18 }}>City Name</Text>
          <View style={styles.mainWrapper}>
            <Icon name="day-cloudy" size={30} color="orange" />
            <Text style={styles.tempText}>85°</Text>
          </View>

          <Text style={{ color: "white" }}>Partly Cloudy</Text>

          <View style={styles.HiLowWrapper}>
           <Text style={{ color: "white" }}> H: 74°  </Text>
           <Text style={{ color: "white" }}> L: 51°  </Text>
          </View>

          <View style={styles.infoWrapper}>
            <Text style={styles.infoWrapperText}>Feels Like</Text>
            <Text style={styles.infoWrapperText}>Humidity</Text>
            <Text style={styles.infoWrapperText}>Rain</Text>
          </View>

          <View style={styles.forecastWrapper}>
          <Text style={styles.forecastWrapperDay}>Wed</Text>
            <View style={{ flexDirection: 'row'}}>
              
            <Ionicons name="rainy" size={24} color="black" />
            <Text style={styles.infoWrapperText}> Light Rain</Text>
            </View>
            
            
            <Text style={styles.infoWrapperText}>H: 51°  L: 43°</Text>
          </View>
          <View style={styles.forecastWrapper}>
          <Text style={styles.forecastWrapperDay}>Thurs</Text>
            <View style={{ flexDirection: 'row'}}>
              
            <Ionicons name="sunny" size={24} color="black" />
            <Text style={styles.infoWrapperText}> Light Rain</Text>
            </View>
            
            
            <Text style={styles.infoWrapperText}>H: 51°  L: 43°</Text>
          </View>


        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  textInput: {
    marginTop: 70,
    height: 40,
    margin: 12,
    padding: 10,
    width: '90%',
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 10,

  },
  tempText: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  mainWrapper: {
    flexDirection: "row",
    alignItems: 'center',
  },
  HiLowWrapper: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
  },
  infoWrapper: {
    opacity: .5,
    margin: 12,
    padding: 10,
    width: '90%',
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
   
  },
  infoWrapperText: {
   
  },
  forecastWrapperDay: {
    opacity: 1,
    fontWeight: "bold",
    fontSize: 18,
   
  },

  forecastWrapper: {
    opacity: .5,
    margin: 12,
    padding: 10,
    width: '90%',
    maxWidth: 500,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
    
  },

});

export default App;
