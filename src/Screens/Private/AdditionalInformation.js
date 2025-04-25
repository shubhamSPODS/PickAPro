import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import Typography, { FULL_WIDTH } from '../../Components/Typography';
import MapView, { Marker } from 'react-native-maps';
import { APP_BG, CHECK_CIRCLE, MAP_PIN_AREA } from '../../Components/ImageAssets';
import Icon from '../../Components/Icon';
import CustomTextInput from '../../Components/CustomTextInput';
import { BLACK } from '../../Components/Colors';
import CommonButton from '../../Components/CommonButton';
import { MEDIUM } from '../../Components/AppFonts';

const AdditionalInformation = ({navigation}) => {
    const region = {
        latitude: 6.6018,
        longitude: 3.3515,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground style={styles.background} source={APP_BG}>
                <Header title={'Additional Information'} />

                <ScrollView>
                    <View style={styles.container}>
                        <Typography size={14}>Tisco Plaza House, Ikeja</Typography>

                        <MapView  mapType='hybrid'   style={styles.map} region={region} loadingEnabled>
                            <Marker coordinate={region}>
                                <Icon
                                    source={MAP_PIN_AREA}
                                    style={styles.pinImage}
                                    resizeMode="contain"
                                 
                                />
                            </Marker>
                        </MapView>

                        <CustomTextInput
                            placeholder={'Building'}
                            containerStyle={styles.fullWidth}
                        />

                        <View style={styles.row}>
                            <CustomTextInput placeholder={'Apartment'} containerStyle={styles.halfWidth} />
                            <CustomTextInput placeholder={'Floor'} containerStyle={styles.halfWidth} />
                        </View>

                        <CustomTextInput
                            placeholder={'Street'}
                            containerStyle={styles.fullWidth}
                        />

                        <TouchableOpacity style={styles.checkContainer}>
                            <Icon source={CHECK_CIRCLE} size={20} />
                            <Typography size={12} fontFamily={MEDIUM} color={BLACK}>
                                {'  '}Set as current home address
                            </Typography>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <CommonButton title={'Save changes'} style={styles.button} onPress={()=>{
                    navigation.navigate('SavedAddress')
                }}/>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default AdditionalInformation;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    background: {
        flex: 1,
    },
    container: {
        width: FULL_WIDTH - 50,
        alignSelf: 'center',
        paddingVertical: 5,
        marginVertical: 15,
    },
    map: {
        width: '100%',
        height: 150,
        marginTop: 5,
    },
    pinImage: {
        width: 40,
        height: 40,
    },
    fullWidth: {
        width: '100%',
        marginTop: 15,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    halfWidth: {
        width: '48%',
    },
    checkContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        position: 'absolute',
        bottom: 25,
    },
});
