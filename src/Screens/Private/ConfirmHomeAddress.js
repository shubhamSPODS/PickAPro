import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import {
    INFO,
    MAP_PIN_AREA,
    NAVIGATION_ARROW,
    SELECTED_CHECK
} from '../../Components/ImageAssets'
import Typography, { FULL_HEIGHT, FULL_WIDTH } from '../../Components/Typography'
import ImgBackground from '../../Components/ImgBackground'
import { GREY_DARK, LIGHT_GREY } from '../../Components/Colors'
import Icon from '../../Components/Icon'
import CommonButton from '../../Components/CommonButton'

const ConfirmHomeAddress = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImgBackground>
                <Header title={'Confirm your address'} />

                <TouchableOpacity style={styles.addressBox} onPress={()=>{navigation.navigate('MapConfirmAddress')}}>
                    <Typography size={14} color={GREY_DARK}>Address</Typography>
                    <Icon source={NAVIGATION_ARROW} size={20} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.locationBox}>
                    <View style={styles.locationInner}>
                        <View style={styles.locationIconWrapper}>
                            <Icon source={MAP_PIN_AREA} size={20} />
                        </View>
                        <Typography size={13} style={styles.locationText}>Current Location</Typography>
                    </View>
                    <Icon size={20} source={SELECTED_CHECK} />
                </TouchableOpacity>

                <View style={styles.textContainer}>
                    <Icon source={INFO} size={20} />
                    <Typography size={12} style={styles.otpText}>
                        We’ll show you cost estimates and trending projects in your neighbourhood.
                    </Typography>
                </View>

                <CommonButton title={'Finish'} />
            </ImgBackground>
        </SafeAreaView>
    )
}

export default ConfirmHomeAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressBox: {
        width: FULL_WIDTH - 50,
        height: 50,
        borderWidth: 1,
        borderColor: LIGHT_GREY,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    locationBox: {
        width: FULL_WIDTH - 50,
        alignSelf: 'center',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    locationInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationIconWrapper: {
        width: 40,
        height: 40,
        backgroundColor: LIGHT_GREY,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        marginLeft: 10,
    },
    textContainer: {
        flexDirection: 'row',
        width: FULL_WIDTH - 50,
        backgroundColor: LIGHT_GREY,
        padding: 15,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpText: {
        marginLeft: 10,
    },
})
