import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BLACK, DARK_GREEN, GREY_DARK, LIGHT_GREY, WHITE } from '../../Components/Colors'
import Header from '../../Components/Header'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import { MEDIUM } from '../../Components/AppFonts'

const MyBookings = () => {
  const [selectedTab, setSelectedTab] = useState('Progress')
  return (
    <SafeAreaView style={styles.container}>

      <Header title={'Order'} />

      <View style={{
        width: FULL_WIDTH,
        flexDirection: 'row',
        minHeight: 45,
        justifyContent: "space-between",
      }}>
        <TouchableOpacity onPress={() => {
          setSelectedTab('Progress')
        }} style={{ backgroundColor: selectedTab === 'Progress' ? DARK_GREEN : LIGHT_GREY, width: '50%', borderRightWidth: 1, borderRightColor: LIGHT_GREY, alignItems: 'center', justifyContent: 'center', borderBottomColor: LIGHT_GREY, borderBottomWidth: 2 }}>
          <Typography fontFamily={MEDIUM} color={selectedTab === 'Progress' ? WHITE : BLACK} size={14}>In Progress</Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setSelectedTab('Completed')
        }} style={{ backgroundColor: selectedTab === 'Completed' ? DARK_GREEN : LIGHT_GREY, width: '50%', borderBottomColor: LIGHT_GREY, borderBottomWidth: 2, alignItems: 'center', justifyContent: 'center', }}>
          <Typography fontFamily={MEDIUM} color={selectedTab === 'Completed' ? WHITE : BLACK} size={14}>Completed</Typography>
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