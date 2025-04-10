import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Typography, { FULL_WIDTH } from './Typography';
import { BLACK, WHITE } from './Colors';

const CustomTextInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    style,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={BLACK}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                {...props}
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        width: FULL_WIDTH - 60,
        alignSelf: "center"
    },
    label: {
        marginBottom: 6,
    },
    input: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: BLACK,
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
        backgroundColor: WHITE,
        height: 45
    },
});
