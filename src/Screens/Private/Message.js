import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import CustomTextInput from '../../Components/CustomTextInput'
import { FULL_WIDTH } from '../../Components/Typography'

const Message = () => {
  return (
   <SafeAreaView style={{flex:1}}>

       <Header title={'Messages'}/>
       <View style={{width:FULL_WIDTH-50,alignSelf:"center",marginVertical:15}}>
  <CustomTextInput searchIcon placeholder={'Search by name...'} inputStyle={{width:'90%'}} containerStyle={{width:'100%',borderRadius:30}}/>
  </View>





   </SafeAreaView>
  )
}

export default Message

const styles = StyleSheet.create({})