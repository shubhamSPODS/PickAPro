import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Typography, { FULL_WIDTH } from './Typography'
import LinearGradient from 'react-native-linear-gradient'
import { SHADE_ORANGE_DARK, SHADE_ORANGE_LIGHT, WHITE } from './Colors'
import Icon from './Icon'
import { BACK, MAP_PIN_AREA } from './ImageAssets'
import { MEDIUM, SEMI_BOLD } from './AppFonts'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title, addLocationBtn, emptySpace = true }) => {
    const navigation = useNavigation()
    return (
        <LinearGradient colors={[SHADE_ORANGE_DARK, SHADE_ORANGE_LIGHT]} style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Icon source={BACK} size={20} />
                </TouchableOpacity>
                <Typography fontFamily={SEMI_BOLD}>{title}</Typography>
                {addLocationBtn && <TouchableOpacity activeOpacity={0.9} style={{
                    padding: 10, gap: 10,
                    backgroundColor: WHITE, borderRadius: 25, flexDirection: "row", justifyContent: 'center',
                }} onPress={() => {
                }}>
                    <Icon source={MAP_PIN_AREA} size={20} />
                    <Typography size={13} fontFamily={MEDIUM}>Add</Typography>
                </TouchableOpacity>}

                {emptySpace && <View style={styles.placeholder} />}
            </View>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: FULL_WIDTH,
        padding: 10,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    placeholder: {
        width: 20
    }
})