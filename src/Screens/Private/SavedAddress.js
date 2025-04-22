import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../Components/Header';
import Typography, { FULL_WIDTH } from '../../Components/Typography';
import { GREY_DARK, LIGHT_GREY, THEME_ORANGE } from '../../Components/Colors';
import Icon from '../../Components/Icon';
import { CHECK_CIRCLE, HOME_ICON, MAP_PIN_AREA } from '../../Components/ImageAssets';
import { MEDIUM, SEMI_BOLD } from '../../Components/AppFonts';
import CommonButton from '../../Components/CommonButton';

const addressData = [
    {
        id: '1',
        label: 'Home',
        addressLine: '1234 Elm Street, Los Angeles, CA 90001, USA',
        city: 'California',
    },
    {
        id: '2',
        label: 'Home',
        addressLine: 'Los Angeles, CA 90095, United States',
        city: 'California',
    }
];

const SavedAddress = () => {
    const [selectedId, setSelectedId] = useState('2');

    const _RenderItem = ({ item }) => {
        const isSelected = item.id === selectedId;
        return (
            <TouchableOpacity
                onPress={() => setSelectedId(item.id)}
                style={[
                    styles.card,
                    { borderColor: isSelected ? THEME_ORANGE : LIGHT_GREY }
                ]}
            >
                <View style={styles.row}>
                    <Icon source={HOME_ICON} tintColor={GREY_DARK} size={15}/>
                    <Typography style={styles.label}>{item.label}</Typography>
                </View>
                <Typography style={styles.address}>{item.addressLine}</Typography>
                <Typography style={styles.city}>{item.city}</Typography>

                <View style={styles.radioContainer}>
                    {isSelected ? (
                      <Icon source={CHECK_CIRCLE} size={20}/>
                    ) : (
                        <Icon source={CHECK_CIRCLE} size={20}/>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header addLocationBtn emptySpace={false} title={'Saved Address'} />

            <FlatList
                data={addressData}
                renderItem={_RenderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 100 }}
            />

          <CommonButton title={'Select Address'} style={{bottom:20}}/>
        </SafeAreaView>
    );
};

export default SavedAddress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: FULL_WIDTH - 50,
        padding: 15,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    label: {
        marginLeft: 5,
        fontSize:13,
        fontFamily:SEMI_BOLD
    },
    address: {
        fontSize: 12,
        color: GREY_DARK,
    },
    city: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    },
    radioContainer: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    
   
});
