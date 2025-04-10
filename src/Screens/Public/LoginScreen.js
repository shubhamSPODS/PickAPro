import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormContainer from '../../Components/FormContainer'
import { BACK } from '../../Components/ImageAssets'
import Icon from '../../Components/Icon'
import { BOLD } from '../../Components/AppFonts'

const LoginScreen = ({ navigation }) => {
  return (
    <FormContainer>
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Icon source={BACK } size={25}/>
        <Text style={{ fontFamily:BOLD,fontSize:20}}>Hello from custom font!</Text>
      </TouchableOpacity>
    </FormContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})