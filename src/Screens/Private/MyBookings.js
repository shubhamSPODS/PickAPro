import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DARK_GREEN, GREY_DARK, LIGHT_GREY, WHITE } from '../../Components/Colors'
import Header from '../../Components/Header'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import { MEDIUM } from '../../Components/AppFonts'

const MyBookings = () => {
  return (
  <SafeAreaView style={styles.container}>
       
       <Header title={'Order'} />

       <View style={{width:FULL_WIDTH,
      flexDirection:'row',
      minHeight:50,
        justifyContent:"space-between",}}>
      <TouchableOpacity style={{backgroundColor:DARK_GREEN, width:'50%',borderRightWidth:1,borderRightColor:LIGHT_GREY, alignItems:'center',justifyContent:'center', borderBottomColor:LIGHT_GREY,borderBottomWidth:2}}> 
 <Typography fontFamily={MEDIUM} color={WHITE}>In Progress</Typography>
 </TouchableOpacity>
 <TouchableOpacity style={{backgroundColor:DARK_GREEN, width:'50%',borderBottomColor:LIGHT_GREY,borderBottomWidth:2,alignItems:'center',justifyContent:'center',}}> 
 <Typography fontFamily={MEDIUM} color={WHITE}>Completed</Typography>
 </TouchableOpacity>

       </View>
     
  </SafeAreaView>
  )
}

export default MyBookings

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: WHITE,
      },
})