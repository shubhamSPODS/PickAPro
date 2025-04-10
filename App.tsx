

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/Redux/Store'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './src/Screens/Public/LoginScreen'
import { AuthStack } from './src/Navigation/StackNavigation'
import { WHITE } from './src/Components/Colors'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={WHITE}/>
       <AuthStack/>
      </NavigationContainer>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})