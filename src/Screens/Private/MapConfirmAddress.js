import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BACK, MAP_PIN_AREA } from '../../Components/ImageAssets';
import Header from '../../Components/Header';
import Typography from '../../Components/Typography';
import { BLACK } from '../../Components/Colors';
import { MEDIUM, SEMI_BOLD } from '../../Components/AppFonts';
import CommonButton from '../../Components/CommonButton';

const { width } = Dimensions.get('window');

const MapConfirmAddress = ({ navigation }) => {
  const region = {
    latitude: 6.6018, 
    longitude: 3.3515,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <Header title={'Confirm your home address'}/>
      <MapView
        style={styles.map}
        region={region}
        loadingEnabled
      >
        <Marker coordinate={region}>
          <Image
            source={MAP_PIN_AREA}
            style={styles.pinImage}
            resizeMode="contain"
          />
        </Marker>
      </MapView>

      <View style={styles.addressBox}>
        <Image
          source={MAP_PIN_AREA}
          style={styles.addressIcon}
        />
        <View>
          <Typography size={14} fontFamily={SEMI_BOLD} color={BLACK}>Tisco Plaza House, Ikeja</Typography>
          <Typography size={12} fontFamily={MEDIUM} color={BLACK}>1234 Elm Street, Los Angeles, CA 90001, USA</Typography>
        </View>
      </View>
  <CommonButton title={'Confirm Location'} style={styles.button} onPress={()=>{
                    navigation.navigate('AdditionalInformation')
                }}/>
      
    </View>
  );
};

export default MapConfirmAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
 
  map: {
    flex: 1,
  },
  addressBox: {
    position: 'absolute',
    top: 90,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  addressIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 3,
  },

  addressSubtitle: {
    fontSize: 13,
    color: '#555',
  },
  pinImage: {
    width: 40,
    height: 40,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
 
});
