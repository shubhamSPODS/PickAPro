import { FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import HomeHeader from '../../Components/HomeHeader'
import { DARK_GREEN, GREY_DARK, SHADE_ORANGE_DARK, SHADE_WHITE, WHITE } from '../../Components/Colors'
import CustomTextInput from '../../Components/CustomTextInput'
import LinearGradient from 'react-native-linear-gradient'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import { REGULAR, SEMI_BOLD } from '../../Components/AppFonts'
import { BANNER, BANNER_1, BANNER_2, BANNER_3, NEXT_ICON, PLUMBING, WALLET, WALLET_BG } from '../../Components/ImageAssets'
import Icon from '../../Components/Icon'
import BannerCarousel from '../../Components/BannerCarousel'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/Slices'
import AnimatedRbSheet from '../../Components/AnimatedRbSheet'

const HomeScreen = ({navigation}) => {
  const images = [BANNER, BANNER_1, BANNER_2, BANNER_3];
  const dispatch = useDispatch();
  const searchInputRef = useRef(null);
  const [sheetVisible, setSheetVisible] = useState(false)
  const _RenderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={()=>{
        navigation.navigate('Listing')
      }} style={styles.serviceItem}>
        <Icon source={PLUMBING} size={40} />
        <Typography size={13} style={styles.serviceText}>Plumber</Typography>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[SHADE_ORANGE_DARK, SHADE_ORANGE_DARK, SHADE_WHITE, SHADE_WHITE]} style={styles.linearGradient}>
          <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
              <Typography fontFamily={SEMI_BOLD} color={WHITE}>Pick-A-Pro</Typography>
              <Typography size={10} color={WHITE}>12 Minutes</Typography>
              <Typography size={10} color={WHITE}>1234 Elm Street, Los Angeles, CA 90001, USA</Typography>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => dispatch(setUser(null))}>
                <ImageBackground source={WALLET_BG} style={styles.imageBackground} resizeMode="contain">
                  <Icon source={WALLET} size={30} />
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>

          <CustomTextInput ref={searchInputRef} searchIcon
            placeholder={'Search for "Indoor Cleaning"'} containerStyle={styles.searchInput}
            onFocus={() => {
            }} 
            />
            

          <View style={styles.categoryHeader}>
            <Typography fontFamily={SEMI_BOLD}>Browse all categories</Typography>
            <TouchableOpacity style={styles.viewAllBtn}>
              <Typography size={12}>View all</Typography>
              <Icon source={NEXT_ICON} size={12} />
            </TouchableOpacity>
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              numColumns={3}
              data={[1, 2, 3, 4, 5, 6]}
              renderItem={_RenderItem}
            />
          </View>

          <Typography fontFamily={SEMI_BOLD} style={styles.sectionTitle}>Popular Services</Typography>
          {/* <BannerCarousel images={images} /> */}
        </LinearGradient>

        <Typography fontFamily={SEMI_BOLD} style={styles.sectionTitle}>Handyman services</Typography>
        <Image source={BANNER_1} style={styles.bannerImage} />

        <Typography fontFamily={SEMI_BOLD} style={styles.sectionTitle}>House Cleaners</Typography>
        <Image source={BANNER_2} style={styles.bannerImage} />

        <Typography fontFamily={REGULAR} size={12} style={styles.descriptionText}>
          The cost of house cleaning per hour depends on the square footage being cleaned.
        </Typography>

        <Typography size={12} color={GREY_DARK} style={styles.centeredText}>
          Don’t see what you are looking for?
        </Typography>

        <Typography size={12} color={DARK_GREEN} fontFamily={SEMI_BOLD} style={styles.centeredText}>
          View all services
        </Typography>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  linearGradient: {
    padding: 10,
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
  searchInput: {
    borderRadius: 50,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 15,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListContainer: {
    width: FULL_WIDTH - 30,
    alignSelf: "center",
  },
  serviceItem: {
    flex: 1,
    padding: 10,
    backgroundColor: WHITE,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
    marginVertical: 10,
    margin: 10,
  },
  serviceText: {
    marginVertical: 10,
  },
  sectionTitle: {
    marginHorizontal: 25,
    marginVertical: 10,
  },
  bannerImage: {
    width: FULL_WIDTH - 50,
    height: 210,
    alignSelf: "center",
  },
  descriptionText: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  centeredText: {
    alignSelf: 'center',
    marginVertical: 10,
  },
})
