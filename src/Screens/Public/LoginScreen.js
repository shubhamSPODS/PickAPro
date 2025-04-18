import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FormContainer from '../../Components/FormContainer'
import AuthHeader from '../../Components/AuthHeader'
import { INFO, THEME_IMG_2 } from '../../Components/ImageAssets'
import BottomThemeImg from '../../Components/BottomThemeImg'
import { LIGHT_GREEB, LIGHT_GREEN, WHITE } from '../../Components/Colors'
import CountryCodePicker from '../../Components/CountryPicker'
import CustomTextInput from '../../Components/CustomTextInput'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import Icon from '../../Components/Icon'
import CommonButton from '../../Components/CommonButton'

const LoginScreen = ({ navigation }) => {
  return (
    <FormContainer>
      <AuthHeader
        title='Login or Sign Up'
      />
      <BottomThemeImg source={THEME_IMG_2} />
      <View style={styles.inputContainer}>
        <CountryCodePicker />
      <CustomTextInput placeholder={'Enter mobile number'} searchIcon containerStyle={{width:'70%'}}/>

      </View>

      <View style={styles.textContainer}>
        <Icon source={INFO} size={20} />
        <Typography size={13} style={styles.otpText}>You will receive an OTP code from Pick-A-Pro
          to verify your mobile.</Typography>
      </View>

      <CommonButton title={'Continue'}  onPress={()=>{
        navigation.navigate('OtpVerify')
      }}/>
      </FormContainer>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 15,
    height:45,
    gap:3,
    
  },
  textInput: {
    width: '70%',
  },
  textContainer: {
    flexDirection: "row",
    width: FULL_WIDTH - 60,
    backgroundColor: LIGHT_GREEN,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  otpText:{
    marginLeft: 10
  }
})