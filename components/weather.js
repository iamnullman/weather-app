import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import SearchBar from './searchbar';

import { sunny } from '../assets/backgroundImages/index';
const days = {
  0: "Pazar",
  1: "Pazartesi",
  2: "Salı",
  3: "Çarşamba",
  4: "Perşembe",
  5: "Cuma",
  6: "Cumartesi"
}
export default function Weather({ weatherData, fetchWeatherData }) {
  let textColor = 'black';

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="darkgray" />
      <ImageBackground
        source={sunny}
        style={styles.backgroundImg}
        resizeMode="cover">
        <SearchBar fetchWeatherData={fetchWeatherData} />

        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Image
            source={{ uri: 'https:' + weatherData.current.condition.icon }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              ...styles.headerText,
              color: textColor,
              fontWeight: 'bold',
              fontSize: 46,
            }}>
            {weatherData.location.name}
          </Text>
          <Text
            style={{
              ...styles.headerText,
              color: textColor,
              fontWeight: 'bold',
            }}>
            {weatherData.location.country}
          </Text>
          <Text style={{ ...styles.headerText, color: textColor }}>
            {weatherData.current.temp_c} °C
          </Text>
        </View>

        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={{ fontSize: 22, color: 'white' }}>Nem</Text>
            <Text style={{ fontSize: 22, color: 'white' }}>
              {weatherData.current.humidity} %
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={{ fontSize: 22, color: 'white' }}>Rüzgar</Text>
            <Text style={{ fontSize: 22, color: 'white' }}>
              {weatherData.current.wind_mph} m/s
            </Text>
          </View>
        </View>

      <ScrollView horizontal={true} style={{
        marginHorizontal: 1,
        marginVertical: 1
      }}>
        <View style={styles.extraInfo2}>
          <View style={styles.info2}>
            <Image
              source={{
                uri:
                  'https:' +
                  weatherData.forecast.forecastday[1].day.condition.icon,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>{days[new Date(weatherData.forecast.forecastday[1].date).getUTCDay()]}</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{weatherData.forecast.forecastday[1].day.condition.text}</Text>
          </View>
         <View style={styles.info2}>
            <Image
              source={{
                uri:
                  'https:' +
                  weatherData.forecast.forecastday[2].day.condition.icon,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>{days[new Date(weatherData.forecast.forecastday[2].date).getUTCDay()]}</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{weatherData.forecast.forecastday[2].day.condition.text}</Text>
          </View>
         <View style={styles.info2}>
            <Image
              source={{
                uri:
                  'https:' +
                  weatherData.forecast.forecastday[3].day.condition.icon,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>{days[new Date(weatherData.forecast.forecastday[3].date).getUTCDay()]}</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{weatherData.forecast.forecastday[3].day.condition.text}</Text>
          </View>
         <View style={styles.info2}>
            <Image
              source={{
                uri:
                  'https:' +
                  weatherData.forecast.forecastday[4].day.condition.icon,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>{days[new Date(weatherData.forecast.forecastday[4].date).getUTCDay()]}</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{weatherData.forecast.forecastday[4].day.condition.text}</Text>
          </View>
         <View style={styles.info2}>
            <Image
              source={{
                uri:
                  'https:' +
                  weatherData.forecast.forecastday[5].day.condition.icon,
              }}
              style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>{days[new Date(weatherData.forecast.forecastday[5].date).getUTCDay()]}</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>{weatherData.forecast.forecastday[5].day.condition.text}</Text>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  headerText: {
    fontSize: 36,
    marginTop: 10,
  },
  extraInfo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    padding: 10
  },
  extraInfo2: {
    flexDirection: 'row',
    marginTop: 150,
    padding: 10,
    justifyContent: 'flex-end'
  },
  info: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  info2: {
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    height: 100,
    padding: 5,
    marginLeft: 4,
    borderRadius: 15,
    justifyContent: 'center',
  },
});
