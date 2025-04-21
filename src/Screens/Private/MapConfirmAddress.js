import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BACK, MAP_PIN_AREA } from '../../Components/ImageAssets';

const { width } = Dimensions.get('window');

const MapConfirmAddress = ({ navigation }) => {
  const region = {
    latitude: 6.6018, // Ikeja
    longitude: 3.3515,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BACK} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Confirm your home address</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Map */}
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

      {/* Address Box */}
      <View style={styles.addressBox}>
        <Image
          source={MAP_PIN_AREA}
          style={styles.addressIcon}
        />
        <View>
          <Text style={styles.addressTitle}>Tisco Plaza House, Ikeja</Text>
          <Text style={styles.addressSubtitle}>1234 Elm Street, Los Angeles, CA 90001, USA</Text>
        </View>
      </View>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapConfirmAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  map: {
    flex: 1,
  },
  addressBox: {
    position: 'absolute',
    top: 110,
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
  addressTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000',
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
    height: 55,
    backgroundColor: '#005c38',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
