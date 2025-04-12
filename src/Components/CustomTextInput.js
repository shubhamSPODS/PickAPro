import { View, TextInput, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SEARCH_ICON } from './ImageAssets';
import { GREY_DARK, LIGHT_GREY, THEME_GREEN, WHITE } from './Colors';

const CustomTextInput = ({ value, onChangeText, placeholder, searchIcon ,inputStyle,containerStyle}) => {
    return (
        <View style={[styles.searchContainer,{...containerStyle}]}>
            {searchIcon && <Image
                source={SEARCH_ICON}
                style={styles.searchIcon}
            />}
            <TextInput
                style={[styles.input,inputStyle]}
                placeholder={placeholder }
                placeholderTextColor={GREY_DARK}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
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
        elevation: 3,
        width: '90%',
        alignSelf: "center",
        alignItems:"center",
        borderWidth:1,
        borderRadius:5,
        borderColor:LIGHT_GREY

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
