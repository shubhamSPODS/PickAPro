import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon'
import { FULL_WIDTH } from './Typography'

const BottomThemeImg = ({
    source = {}
}) => {
    return (
        <Icon source={source} style={{
            width: FULL_WIDTH,
            position: 'absolute',
            opacity: 0.5,
            bottom: -5,
            alignSelf: 'center',
            height: 350
        }} />

    )
}

export default BottomThemeImg

const styles = StyleSheet.create({})