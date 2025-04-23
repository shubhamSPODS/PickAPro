import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert
} from 'react-native';
import { APP_BG, BOTTOM_IMG, GUEST, PROVIDER, SEEKER } from '../../Components/ImageAssets';
import Icon from '../../Components/Icon';
import Typography, { FULL_HEIGHT, FULL_WIDTH } from '../../Components/Typography';
import { BLACK, WHITE } from '../../Components/Colors';
import { MEDIUM, SEMI_BOLD } from '../../Components/AppFonts';
import { scale } from 'react-native-size-matters';

const SelectUser = ({ navigation }) => {
  const handleSelect = (userType) => {
    switch (userType) {
      case 'Provider':
        navigation.navigate('LoginScreen');
        break;
      case 'Seeker':
      case 'Guest':
        Alert.alert('Coming Soon');
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Typography
        size={20}
        color={BLACK}
        fontFamily={MEDIUM}
        style={styles.titleText}
      >
        Choose{'\n'}
        <Typography size={22} fontFamily={SEMI_BOLD}>what you need</Typography>
      </Typography>

      <TouchableOpacity style={styles.providerBtn} onPress={() => handleSelect('Provider')}>
        <Icon source={PROVIDER} size={180} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.seekerBtn} onPress={() => handleSelect('Seeker')}>
        <Icon source={SEEKER} size={180} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.guestBtn} onPress={() => handleSelect('Guest')}>
        <Icon source={GUEST} size={180} />
      </TouchableOpacity>

      <Image source={BOTTOM_IMG} style={styles.bottomImage} />
    </SafeAreaView>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  titleText: {
    marginLeft: 22,
    marginTop: scale(35),
  },
  providerBtn: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  seekerBtn: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  guestBtn: {
    alignItems: 'flex-end',
    marginLeft: 15,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: FULL_WIDTH,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
