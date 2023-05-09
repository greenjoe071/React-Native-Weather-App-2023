import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';

// FLATLIST DATA
const DATA = [
  {
    "dt_txt": "2022-08-30 15:00:00",
    "main": {
      "temp": 295.45,
      "feels_like": 295.59,
      "temp_min": 292.84,
      "temp_max": 295.45,
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
        "description": "light rain",
        "icon": "10n"
      }
    ],
  },
  {
    "dt_txt": "2022-08-30 18:00:00",
    "main": {
      "temp": 95.45,
      "feels_like": 295.59,
      "temp_min": 292.84,
      "temp_max": 25.45,
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
      "temp_min": 22.84,
      "temp_max": 285.45,
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
        "description": "light rain",
        "icon": "10n"
      }
    ],
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props || {};
  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <Feather name={"sun"} size={20} color={"white"}/>
          <Text>{dt_txt}</Text>
          <Text>{min}</Text>
          <Text>{max}</Text>
      </View>

      </SafeAreaView>

  )
}

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item condition={item.weather[0].main} 
    dt_txt={item.dt_txt} 
    min={item.main.temp_min} 
    max={item.main.temp_max} />
)
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />

    </SafeAreaView>
        
      //   <SafeAreaView>
      //   <View style={styles.container}>

      //     <View style={styles.infoWrapper}>
      //       <Text style={styles.infoWrapperText}>Feels Like</Text>
      //       <Text style={styles.infoWrapperText}>Humidity</Text>
      //       <Text style={styles.infoWrapperText}>Rain</Text>
      //     </View>

      //     <View style={styles.forecastWrapper}>
      //     <Text style={styles.forecastWrapperDay}>Wed</Text>
      //       <View style={{ flexDirection: 'row'}}>
              
      //       <Ionicons name="rainy" size={24} color="black" />
      //       <Text style={styles.infoWrapperText}> Light Rain</Text>
      //       </View>
            
            
      //       <Text style={styles.infoWrapperText}>H: 51°  L: 43°</Text>
      //     </View>
      //     <View style={styles.forecastWrapper}>
      //     <Text style={styles.forecastWrapperDay}>Thurs</Text>
      //       <View style={{ flexDirection: 'row'}}>
              
      //       <Ionicons name="sunny" size={24} color="black" />
      //       <Text style={styles.infoWrapperText}> Light Rain</Text>
      //       </View>
            
            
      //       <Text style={styles.infoWrapperText}>H: 51°  L: 43°</Text>
      //     </View>


      //   </View>
      // </SafeAreaView>
    )

}


const styles = StyleSheet.create({
  
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
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
export default UpcomingWeather