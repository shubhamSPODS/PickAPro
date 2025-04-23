import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Typography, { FULL_WIDTH } from './Typography';
import LinearGradient from 'react-native-linear-gradient';
import { SHADE_ORANGE_DARK, SHADE_ORANGE_LIGHT, WHITE } from './Colors';
import Icon from './Icon';
import { BACK, MAP_PIN_AREA } from './ImageAssets';
import { MEDIUM, SEMI_BOLD } from './AppFonts';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title, addLocationBtn, emptySpace = true }) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
            <LinearGradient colors={[SHADE_ORANGE_DARK, SHADE_ORANGE_LIGHT]} style={styles.container}>
                <View style={styles.headerRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon source={BACK} size={20} />
                    </TouchableOpacity>
                    
                    <Typography fontFamily={SEMI_BOLD}>{title}</Typography>
                    
                    {addLocationBtn ? (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.addButton}
                            onPress={() => {}}>
                            <Icon source={MAP_PIN_AREA} size={20} />
                            <Typography size={13} fontFamily={MEDIUM}>Add</Typography>
                        </TouchableOpacity>
                    ) : emptySpace && (
                        <View style={styles.placeholder} />
                    )}
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: SHADE_ORANGE_DARK,
    },
    container: {
        width: FULL_WIDTH,
        minHeight: 80,
        justifyContent: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    addButton: {
        padding: 10,
        gap: 10,
        backgroundColor: WHITE,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        width: 20,
    },
});
