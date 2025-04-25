

import { Platform, SafeAreaView, StatusBar, StyleSheet, View,  } from 'react-native'
import React, { useEffect } from 'react'
import { Provider, useSelector,   } from 'react-redux'
import store from './src/Redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import {  MainNavigation } from './src/Navigation/StackNavigation'
import { THEME_ORANGE, WHITE } from './src/Components/Colors'
import SplashScreen from 'react-native-splash-screen'

export const MyStatusBar = ({ backgroundColor, ...props }: any) => {
  const height = Platform.OS === 'android'
    ? StatusBar.currentHeight
    : undefined; 
  // console.log(height,'==height');
  
  return (
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
  );
};
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer >
     
     <MainNavigation/>
      </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({

 
 
})
