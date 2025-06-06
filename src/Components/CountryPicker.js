import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from './Icon';
import { DOWN, THEME_IMG_1 } from './ImageAssets';
import { BLACK, LIGHT_GREY, WHITE } from './Colors';

const CountryCodePicker = ({ onSelectCountry }) => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');

  const handleSelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);

    if (onSelectCountry) {
      onSelectCountry({
        countryCode: country.cca2,
        callingCode: country.callingCode[0],
        name: country.name,
      });
    }
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        countryCode={countryCode}
        withFlag
        withFilter
        withCallingCode
        withCallingCodeButton
        onSelect={handleSelect}
      />
      {/* <Icon source={DOWN} size={15} style={{marginLeft:5}}/> */}
    </View>
  );
};

export default CountryCodePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width:"30%",
    justifyContent:"center",
    borderWidth:1,
    borderRadius:5,
    borderColor:LIGHT_GREY
    
  },
  label: {
    fontSize: 14,
    marginRight: 8,
    
  },
});
