import { Platform, StatusBar, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import LoginScreen from '../Screens/Public/LoginScreen';
import HomeScreen from '../Screens/Private/HomeScreen';
import OtpVerify from '../Screens/Public/OtpVerify';
import SelectUser from '../Screens/Public/SelectUser';
import LocationAccess from '../Screens/Private/LocationAccess';
import { MyStatusBar } from '../../App';
import { THEME_ORANGE, WHITE } from '../Components/Colors';
import Listing from '../Screens/Private/Listing';
import ListingQuestionary from '../Screens/Private/ListingQuestionary';
import TabNavigation from './TabNavigation';
import ConfirmHomeAddress from '../Screens/Private/ConfirmHomeAddress';
import MapConfirmAddress from '../Screens/Private/MapConfirmAddress';
import AdditionalInformation from '../Screens/Private/AdditionalInformation';
import SavedAddress from '../Screens/Private/SavedAddress';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    const user = useSelector(store => store?.user?.user);

    return (
        <View style={{ flex: 1 }}>
            {Platform.OS === 'android' ? <StatusBar backgroundColor={user ? THEME_ORANGE : WHITE}
                barStyle={user ? 'light-content' : 'dark-content'} /> :
                <MyStatusBar
                    backgroundColor={user ? THEME_ORANGE : WHITE}
                    barStyle={user ? 'light-content' : 'dark-content'}
                />}
            {user ? <HomeStack /> : <AuthStack />}
        </View>
    );
};

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SelectUser">
            <Stack.Screen name="SelectUser" component={SelectUser} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="OtpVerify" component={OtpVerify} />
        </Stack.Navigator>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LocationAccess">
            <Stack.Screen name="LocationAccess" component={LocationAccess} />
            <Stack.Screen name="ConfirmHomeAddress" component={ConfirmHomeAddress} />
            <Stack.Screen name="MapConfirmAddress" component={MapConfirmAddress} />
            <Stack.Screen name="AdditionalInformation" component={AdditionalInformation} />
            <Stack.Screen name="SavedAddress" component={SavedAddress} />

            <Stack.Screen name="MainTabs" component={TabNavigation} />
            <Stack.Screen name="ListingQuestionary" component={ListingQuestionary} />

        </Stack.Navigator>
    );
};