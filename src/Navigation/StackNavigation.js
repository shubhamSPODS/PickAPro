import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Public/LoginScreen';
import HomeScreen from '../Screens/Private/HomeScreen';
import OtpVerify from '../Screens/Public/OtpVerify';
import SelectUser from '../Screens/Public/SelectUser';
import { useSelector } from 'react-redux';
import LocationAccess from '../Screens/Private/LocationAccess';

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    const user = useSelector(store => store?.user?.user); 
    
    return user ? <HomeStack /> : <AuthStack />;
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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};
