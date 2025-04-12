import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Typography, { FULL_WIDTH } from './Typography';
import { SHADE_ORANGE_DARK, SHADE_ORANGE, WHITE } from './Colors';
import { SEMI_BOLD } from './AppFonts';
import Icon from './Icon';
import { WALLET, WALLET_BG } from './ImageAssets';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/Slices';
import CustomTextInput from './CustomTextInput';

const HomeHeader = () => {
  const dispatch = useDispatch();

  return (
    <LinearGradient
      colors={[SHADE_ORANGE_DARK, SHADE_ORANGE]}
      style={styles.linearGradient}
    >
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
    </LinearGradient>
  );
};

export default HomeHeader;

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
});
