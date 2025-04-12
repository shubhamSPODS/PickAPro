import { FlatList, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../Components/HomeHeader'
import { SHADE_ORANGE_DARK, SHADE_ORANGE_LIGHT, SHADE_WHITE, THEME_GREEN, THEME_ORANGE, WHITE } from '../../Components/Colors'
import CustomTextInput from '../../Components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import { SEMI_BOLD } from '../../Components/AppFonts'
import { DOWN, NEXT_ICON, PLUMBING, WALLET, WALLET_BG } from '../../Components/ImageAssets'
import Icon from '../../Components/Icon'

const HomeScreen = () => {

  const _RenderItem = (({ item }) => {
    return (
      <View style={{
        flex: 1, padding: 10, backgroundColor: WHITE,  borderRadius: 20,
        alignItems: "center", justifyContent: 'center',marginVertical:10,margin:10
      }}>

        <Icon source={PLUMBING} size={40} />
        <Typography size={13} style={{marginVertical:10}}>Plumber</Typography>
      </View>
    )
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[SHADE_ORANGE_DARK, SHADE_ORANGE_DARK, SHADE_WHITE]}
        style={{ flex: 1, backgroundColor: "red" }}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Typography fontFamily={SEMI_BOLD} color={WHITE}>
              Pick-A-Pro
            </Typography>
            <Typography size={10} color={WHITE}>
              12 Minuts
            </Typography>
            <Typography size={10} color={WHITE}>
              1234 Elm Street, Los Angeles, CA 90001, USA
            </Typography>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => dispatch(setUser(null))}>
              <ImageBackground
                source={WALLET_BG}
                style={styles.imageBackground}
                resizeMode="contain"
              >
                <Icon source={WALLET} size={30} />
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <CustomTextInput searchIcon placeholder={'Search for "Indoor Cleaning"'} containerStyle={{ borderRadius: 50 }} />

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 25, marginTop: 15 }}>
          <Typography fontFamily={SEMI_BOLD}>Browse all categories</Typography>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <Typography size={12}>View all</Typography>
            <Icon source={NEXT_ICON} size={12} />
          </TouchableOpacity>
        </View>
        <View style={{ width: FULL_WIDTH - 30, alignSelf: "center",  }}>
          <FlatList
            numColumns={3}
            data={[1, 2, 3,4,5,6]}
            renderItem={_RenderItem}
          />
        </View>

 <Typography fontFamily={SEMI_BOLD} style={{marginLeft:25}}>Popular Services</Typography>
      </LinearGradient>




    </SafeAreaView>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
  linearGradient: {
    width: FULL_WIDTH,
    minHeight: 100,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginVertical: 20
  },
  textContainer: {
    flex: 1,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  imageBackground: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})