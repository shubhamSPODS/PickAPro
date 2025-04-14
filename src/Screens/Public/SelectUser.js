import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { HAND_SHAKE, MAP_SEARCH, RIGHT, THEME_IMG_1, THEME_IMG_2 } from '../../Components/ImageAssets';
import { BLACK, LIGHT_GREY, THEME_GREEN, THEME_ORANGE } from '../../Components/Colors';
import { useFocusEffect } from '@react-navigation/native';
import Icon from '../../Components/Icon';
import { FULL_WIDTH } from '../../Components/Typography';

const SelectUser = ({ navigation }) => {
  const [selected, setSelected] = useState('');
  const handleSelect = (userType) => {
    setSelected(userType);
    navigation.navigate('LoginScreen');
  };
  const options = [
    {
      key: 'seeker',
      label: 'Service Seeker',
      icon: MAP_SEARCH,
    },
    {
      key: 'provider',
      label: 'Service Providers',
      icon: HAND_SHAKE,
    },
  ];
  useFocusEffect(
    useCallback(() => {
      setSelected('');
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
              <StatusBar backgroundColor={THEME_ORANGE}/>
      
      <Icon source={THEME_IMG_1} style={styles.blobTop} />
      <View style={styles.cardContainer}>
        {options.map(({ key, label, icon }) => (
          <TouchableOpacity
            key={key}
            style={[styles.card, selected === key && styles.cardSelected]}
            onPress={() => handleSelect(key)}
          >
            <Image source={icon} style={styles.icon} />
            <Text style={styles.cardText}>{label}</Text>
            <View style={styles.checkbox}>
              {selected === key && <Icon source={RIGHT} size={10} style={styles.rightIcon} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Icon source={THEME_IMG_2} style={styles.blobBottom} />
    </SafeAreaView>
  );
};

export default SelectUser;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blobTop: {
    width: FULL_WIDTH,
    position: 'absolute',
    top: 0,
    height:Platform.OS==='ios'? 300:310
  },
  blobBottom: {
    width: FULL_WIDTH,
    position: 'absolute',
    bottom: 0,
    height: Platform.OS==='ios'? 350:310

  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 10,
    borderColor: LIGHT_GREY,
    borderWidth: 1,

  },
  cardSelected: {
    borderWidth: 2,
    borderColor: THEME_ORANGE,
  },
  icon: {
    resizeMode: "contain",
    width: 45,
    height: 45,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkbox: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIcon: {

    tintColor: THEME_GREEN
  }

});
