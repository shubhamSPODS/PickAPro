import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Typography, { FULL_WIDTH } from './Typography';
import { MEDIUM, SEMI_BOLD } from './AppFonts';

const CommonButton = ({
    title,
    onPress,
    backgroundColor = '#00623A',
    textColor = '#fff',
    disabled = false,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: disabled ? '#ccc' : backgroundColor },
                style,
            ]}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Typography style={[styles.text, { color: textColor }, textStyle]}>{title}</Typography>
        </TouchableOpacity>
    );
};

export default CommonButton;

const styles = StyleSheet.create({
    button: {
        width: FULL_WIDTH - 60,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: "center"
    },
    text: {
        fontSize: 16,
        fontFamily: SEMI_BOLD
    },
});
