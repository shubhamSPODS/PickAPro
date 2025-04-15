import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { FULL_WIDTH } from './Typography';


const BannerCarousel = ({ images = [] }) => {
    const renderPage = (item, index) => (
        <View key={index} style={{width:FULL_WIDTH-50}}>
            <Image
                style={{  height: 210,resizeMode:"contain", width:FULL_WIDTH-50}}
                source={item}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                autoplay
                autoplayTimeout={1500}
                loop
                index={0}
                pageSize={FULL_WIDTH-50}
            
            
            >
                {images?.map((image, index) => renderPage(image, index))}
            </Carousel>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width:FULL_WIDTH-50,
        alignSelf:"center",
        borderRadius:30,
        marginTop:10
    },
});

export default BannerCarousel;
