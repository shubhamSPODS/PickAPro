import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Platform,
    PermissionsAndroid,
    Alert
} from 'react-native';
import React from 'react';
import Typography, { FULL_HEIGHT, FULL_WIDTH } from '../../Components/Typography';
import { APP_BG, LOCATION_BG_THEME, WOMEN } from '../../Components/ImageAssets';
import { scale } from 'react-native-size-matters';
import { BLACK, LIGHT_GREY } from '../../Components/Colors';
import { MEDIUM } from '../../Components/AppFonts';
import CommonButton from '../../Components/CommonButton';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const LocationAccess = ({ navigation }) => {
    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization('whenInUse').then(status => {
                if (status === 'granted') {
                    getCurrentLocation();
                } else {
                    Alert.alert(
                        'Permission Denied',
                        'Location access is needed to find nearby professionals.'
                    );
                }
            }).catch(error => {
                console.warn('iOS Geolocation permission error:', error);
            });
        } else {
            const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
            try {
                const result = await request(permission);

                if (result === RESULTS.GRANTED) {
                    getCurrentLocation();
                } else if (result === RESULTS.BLOCKED) {
                    Alert.alert(
                        'Permission Blocked',
                        'Please enable location permission from settings.'
                    );
                } else {
                    Alert.alert(
                        'Permission Denied',
                        'Location access is needed to find nearby professionals.'
                    );
                }
            } catch (error) {
                console.warn('Android permission error:', error);
            }
        }
    };
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.log('Location:', position);
                navigation.navigate('MainTabs')

            },
            error => {
                console.error(error);
                Alert.alert('Error', 'Unable to get location. Make sure location services are enabled.');
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground style={{
                width: FULL_WIDTH,
                height: FULL_HEIGHT,
                justifyContent: "flex-end"
            }}
                source={APP_BG}
                resizeMode="cover">
                <View style={styles.contentBox}>
                    <Image
                        source={WOMEN}
                        style={styles.avatar}
                    />
                    <Typography style={styles.description}>
                        We need your location access to easily find Skillr professionals around you.
                    </Typography>
                    <CommonButton title={'Allow location access'} style={styles.allowButton} onPress={requestLocationPermission} />
                    <CommonButton title={'Not Now'} textStyle={{ color: '#333', }} backgroundColor={LIGHT_GREY} style={styles.notNowButton} onPress={() => {
                        navigation.navigate('MainTabs')
                    }} />
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};

export default LocationAccess;

const styles = StyleSheet.create({
    contentBox: {
        flex: 0.5, marginBottom: scale(80),
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 75,
        resizeMode: 'contain',
        marginLeft: 15
    },
    description: {
        width: "85%",
        fontSize: 16,
        color: BLACK,
        fontFamily: MEDIUM,
        marginBottom: 20,
        marginLeft: scale(30)
    },
    allowButton: {
        width: '85%',
        paddingVertical: 14,
        borderRadius: 24,
        alignItems: 'center',
        marginBottom: 5,
    },
    allowButtonText: {
        color: 'white',
        fontSize: 16,
    },
    notNowButton: {
        width: '85%',
        paddingVertical: 14,
        borderRadius: 24,
        alignItems: 'center',
    },

});
