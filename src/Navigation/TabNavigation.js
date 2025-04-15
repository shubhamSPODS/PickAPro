import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Private/HomeScreen';
import ListingQuestionary from '../Screens/Private/ListingQuestionary';
import Icon from '../Components/Icon';
import { NEXT_ICON } from '../Components/ImageAssets';
import { WHITE } from '../Components/Colors';
import Listing from '../Screens/Private/Listing';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={styles.tabButton}
                    >
                        <Icon
                            source={NEXT_ICON}
                            size={20}
                        />
                        <Text style={{ color: isFocused ? '#FF7F50' : '#aaa', fontSize: 12 }}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const TabNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Listing"
                component={Listing}
                options={{ tabBarLabel: 'Listing' }}
            />

        </Tab.Navigator>
    );
};

export default TabNavigation;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: WHITE,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
