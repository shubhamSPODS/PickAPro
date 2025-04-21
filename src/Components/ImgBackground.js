import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { APP_BG } from './ImageAssets'
import { FULL_HEIGHT, FULL_WIDTH } from './Typography'

const ImgBackground = ({ children }) => {
    return (
        <ImageBackground source={APP_BG} resizeMode='cover' style={{
            width: FULL_WIDTH,
            height: FULL_HEIGHT,
            justifyContent: "flex-end"
        }}>
            <View style={{flex:1}}>
            {children}
            </View>
        </ImageBackground>
    )
}

export default ImgBackground

const styles = StyleSheet.create({})