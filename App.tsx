

import { Platform, SafeAreaView, StatusBar, StyleSheet, View,  } from 'react-native'
import React, { useEffect } from 'react'
import { Provider, useSelector,   } from 'react-redux'
import store from './src/Redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import {  MainNavigation } from './src/Navigation/StackNavigation'
import { THEME_ORANGE, WHITE } from './src/Components/Colors'
import SplashScreen from 'react-native-splash-screen'

export const MyStatusBar = ({ backgroundColor, ...props }: any) => (
  <View style={{ height: StatusBar.currentHeight, backgroundColor }}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide when app is ready
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

  container: {
    flex: 1,
  },
  statusBar: {
    height:  StatusBar.currentHeight,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height:  Platform.OS === 'ios' ? 44 : 56,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
})
