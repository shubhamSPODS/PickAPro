import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Private/HomeScreen';
import Listing from '../Screens/Private/Listing';
import Message from '../Screens/Private/Message';
import Profile from '../Screens/Private/Profile';
import Icon from '../Components/Icon';
import { CHAT_ICON, HOME_ICON, MENU_ICON, PROFILE_ICON } from '../Components/ImageAssets';
import { BLACK, GREY_DARK, THEME_ORANGE, WHITE } from '../Components/Colors';
import Typography from '../Components/Typography';
import { MEDIUM } from '../Components/AppFonts';

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

                let iconSource;
                switch (route.name) {
                    case 'Home':
                        iconSource = HOME_ICON;
                        break;
                    case 'Listing':
                        iconSource = MENU_ICON;
                        break;
                    case 'Message':
                        iconSource = CHAT_ICON;
                        break;
                    case 'Profile':
                        iconSource = PROFILE_ICON;
                        break;
                    default:
                        iconSource = null;
                }

                const isCenter = route.name;

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={styles.tabButton}
                    >
                        <View style={[
                            styles.iconOuterCircle,
                            isCenter && isFocused && styles.iconOuterCircleFocused
                        ]}>
                            <View style={[
                                styles.iconInnerCircle,
                                isCenter && isFocused && styles.iconInnerCircleFocused
                            ]}>
                                <Icon
                                    tintColor={isFocused ? WHITE : BLACK}
                                    source={iconSource}
                                    size={isCenter && isFocused ? 20 : 16}
                                />
                            </View>
                        </View>
                        <Typography fontFamily={MEDIUM}  size={12} style={[
                            styles.label,
                            isFocused && styles.labelFocused
                        ]}>
                            {route.name}
                        </Typography>
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Listing" component={Listing} />
            <Tab.Screen name="Message" component={Message} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default TabNavigation;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 70 : 60,
        backgroundColor: WHITE,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:Platform.OS==='ios'? 20:10,
    },
    iconOuterCircle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    iconOuterCircleFocused: {
        borderRadius: 45,
        backgroundColor: WHITE,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconInnerCircle: {
        backgroundColor: 'transparent',
        borderRadius: 0,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconInnerCircleFocused: {
        backgroundColor: THEME_ORANGE,
        borderRadius: 35,
        width: 55,
        height: 55,
    },
    label: {
        color: BLACK,
        fontSize: 10,
    },
    labelFocused: {
        color: THEME_ORANGE,
    },
});
