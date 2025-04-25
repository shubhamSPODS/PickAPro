import { View, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SEARCH_ICON } from './ImageAssets';
import { GREY_DARK, LIGHT_GREY, THEME_GREEN, WHITE } from './Colors';
import Typography from './Typography';
import { MEDIUM, SEMI_BOLD } from './AppFonts';

const CustomTextInput = ({ heading = '', label, onBlur, ref, value, onChangeText, placeholder, 
    searchIcon, inputStyle, containerStyle, onFocus }) => {
    return (
        <>
            {label &&
                <Typography fontFamily={MEDIUM} style={{ marginLeft: 20 }}>{heading}</Typography>
            }
            <View style={[styles.searchContainer, { ...containerStyle }]}>
                {searchIcon && <Image
                    source={SEARCH_ICON}
                    style={styles.searchIcon}
                />}

                <TextInput
                    ref={ref}
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={GREY_DARK}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </View>
        </>
    );
};

export default CustomTextInput;
const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: WHITE,
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 45,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 0.6,
        width: '90%',
        alignSelf: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: LIGHT_GREY

    },
    searchIcon: {
        width: 18,
        height: 18,
        marginRight: 10,
        tintColor: GREY_DARK,
    },
    input: {
        fontSize: 14,
    },
});
