import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'

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
    FlatList,
} from 'react-native';




//Today's Date, Time, Month, etc.
const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
}

// FLATLIST DATA
const DATA = [
    {
      "dt_txt": "2022-08-30 15:00:00",
      "main": {
        "temp": 295.45,
        "feels_like": 295.59,
        "temp_min": 22,
        "temp_max": 55,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 931,
        "humidity": 71,
        "temp_kf": 2.61
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "partly cloudy",
          "icon": "10n"
        }
      ],
    },
    {
      "dt_txt": "2022-08-30 18:00:00",
      "main": {
        "temp": 95.45,
        "feels_like": 295.59,
        "temp_min": 92,
        "temp_max": 25,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 931,
        "humidity": 71,
        "temp_kf": 2.61
      },
      "weather": [
        {
          "id": 500,
          "main": "NOTRain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
    },
    {
      "dt_txt": "2022-09-04 12:00:00",
      "main": {
        "temp": 95.45,
        "feels_like": 295.59,
        "temp_min": 22,
        "temp_max": 54,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 931,
        "humidity": 71,
        "temp_kf": 2.61
      },
      "weather": [
        {
          "id": 500,
          "main": "Sun",
          "description": "sunny",
          "icon": "10n"
        }
      ],
    }
  ]

const Item = (props) => {
    const { dt_txt, min, max, condition, description } = props
    return (
        <View style={styles.container}>
            <View style={styles.forecastWrapper}>

                <Text style={styles.forecastWrapperDay}>DAY</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Feather name={"sun"} size={24} color={"green"} />
                    <Text> {description}</Text>
                </View>
                <Text >H: {max}°  L: {min + 1}°</Text>

            </View>
        </View>
        

    )
}
const CurrentWeather = () => {

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

//RENDER ITEM FUNCTION:
const renderItem = ({item}) => (
        <Item condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max} 
        description={item.weather[0].description}/>
    )

    return (
        <ImageBackground source={require('../../assets/blue-bg.png')} style={styles.image}>
            <SafeAreaView style={styles.container}>
                
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter city name..."
                        placeholderTextColor={'#000'}
                    />
                    <View>
                        <Text style={{ color: "white" }}>{`${dateBuilder(new Date())}`} {time.toLocaleTimeString([], { hour:'2-digit', minute:'2-digit', hour12:true })} {"\n"}</Text>
                    </View>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>City Name</Text>
                    <View style={styles.mainWrapper}>
                        <Icon name="day-cloudy" size={30} color="orange" />
                        <Text style={styles.tempText}>85°</Text>
                    </View>

                    <Text style={{ color: "white" }}>Partly Cloudy</Text>

                    <View style={styles.HiLowWrapper}>
                        <Text style={{ color: "white" }}> H: 74°  </Text>
                        <Text style={{ color: "white" }}> L: 51°  </Text>
                    </View>


{/* CURRENT WEATHER */}

             
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoWrapperColumn}>
                            <Text style={styles.infoWrapperTextLine1}>Feels Like</Text>
                            <Text>64°</Text>
                        </View>
                        <View style={styles.infoWrapperColumn}>
                            <Text style={styles.infoWrapperTextLine1}>Humidity</Text>
                            <Text>20%</Text>
                        </View>

                        <View style={styles.infoWrapperColumn}>
                            <Text style={styles.infoWrapperTextLine1}>Rain</Text>
                            <Text>10%</Text>
                        </View>
                    </View>

                    {/* <View style={styles.forecastWrapper}>
                        <Text style={styles.forecastWrapperDay}>Wed</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="rainy" size={24} color="black" />
                            <Text> Light Rain</Text>
                        </View>
                        <Text>H: 51°  L: 43°</Text>
                    </View>

                    <View style={styles.forecastWrapper}>
                        <Text style={styles.forecastWrapperDay}>Thurs</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Feather name="sun" size={24} color="black" />
                            <Text> Light Rain</Text>
                        </View>
                        <Text style={styles.infoWrapperText}>H: 51°  L: 43°</Text>
                    </View> */}

{/* FORECASTED WEATHER */}

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                /> 

            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
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
        // opacity: .5,
        margin: 12,
        padding: 10,
        width: '90%',
        maxWidth: 500,
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    infoWrapperColumn: {
        flexDirection: "column",
        marginHorizontal: 20,

    },
    infoWrapperTextLine1: {
        fontWeight: "bold",
    },
    infoWrapperTextLine2: {

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
        justifyContent: "space-around",
        alignItems: 'center',

    },
    forecastWrapperDay: {
        opacity: 1,
        fontWeight: "bold",
        fontSize: 18,
    },

});

export default CurrentWeather;
