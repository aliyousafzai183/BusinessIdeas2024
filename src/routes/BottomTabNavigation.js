import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
    MainHomeScreen, CartHomeScreen, NotificationHomeScreen, WalletHomeScreen, TrackingHomeScreen
} from '../screens/index';
import RouteName from './RouteName';
import colorss from '../utils/colorss';

const Tab = createMaterialBottomTabNavigator();

const Badge = ({ value, focused }) => {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: colorss.KariYellow,
            borderRadius: 6,
            width: 15,
            height: 15,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ color: 'white', fontSize: 10 }}>{value}</Text>
        </View>
    )
};

const TabIcon = ({ focused, color, iconComponent: IconComponent, iconName, badgeValue }) => (
    <View style={[
        {
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 45,
            borderRadius: 100,
        },
        focused ? { backgroundColor: colorss.KariYellow } : {}
    ]}>
        <IconComponent name={iconName} color={color} size={26} />
        {badgeValue && <Badge value={badgeValue} color='blue' />}
    </View>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={RouteName.MAIN_HOME_SCREEN}
            activeColor={colorss.UIColors.black}
            inactiveColor={colorss.Neutral.fullNeutral}
            barStyle={{ backgroundColor: colorss.UIColors.white }}
            shifting={true}
            backBehavior='firstRoute'
            screenOptions={{
                tabBarBadgeStyle: { backgroundColor: 'red' },
            }}
        >
            <Tab.Screen
                name={RouteName.MAIN_HOME_SCREEN}
                component={MainHomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Kari App Home Screen',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={FontAwesome6}
                            iconName="house"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteName.WALLET_HOME_SCREEN}
                component={WalletHomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Kari App Wallet',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={FontAwesome6}
                            iconName="wallet"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteName.TRACKING_HOME_SCREEN}
                component={TrackingHomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Track Orders and Deliveries',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={FontAwesome6}
                            iconName="location-dot"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={RouteName.CART_HOME_SCREEN}
                component={CartHomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Kari App Cart',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 45,
                                width: 45,
                                borderRadius: 100,
                            },
                            focused ? { backgroundColor: colorss.KariYellow } : {}
                        ]}>
                            <FontAwesome6 name="bag-shopping" color={color} size={26} />
                            {!focused && <Badge value='4' />}
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={RouteName.NOTIFICATIONS_HOME_SCREEN}
                component={NotificationHomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Kari App Notifications',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 45,
                                width: 45,
                                borderRadius: 100,
                            },
                            focused ? { backgroundColor: colorss.KariYellow } : {}
                        ]}>
                            <Ionicons name="notifications" color={color} size={26} />
                            {!focused && <Badge value='6' />}
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;