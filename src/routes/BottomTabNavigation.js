import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {
    HomeScreen, QuoteScreen, LikedIdeaScreen, MoreScreen
} from '../screens/index';
import RouteName from './RouteName';
import colors from '../utils/colors';

const Tab = createMaterialBottomTabNavigator();

const TabIcon = ({ focused, color, iconComponent: IconComponent, iconName }) => (
    <View style={[
        {
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 45,
            borderRadius: 100,
            backgroundColor: focused ? colors.secondary : colors.background, // Change background color based on focus
        },
    ]}>
        <IconComponent name={iconName} color={color} size={26} />
    </View>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={RouteName.HOME_SCREEN}
            activeColor={colors.textBlack}
            inactiveColor={colors.blackTransparent}
            barStyle={{ backgroundColor: colors.background }}
            shifting={true}
            backBehavior='firstRoute'
        >
            <Tab.Screen
                name={RouteName.HOME_SCREEN}
                component={HomeScreen}
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
                name={RouteName.QUOTE_SCREEN}
                component={QuoteScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Kari App Quote Screen',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={MaterialCommunityIcons}
                            iconName="comment-quote"
                        />
                    ),
                }}
            />
            {/* <Tab.Screen
                name={RouteName.LIKED_IDEA_SCREEN}
                component={LikedIdeaScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'Favourite Ideas Screen',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={Fontisto}
                            iconName="favorite"
                        />
                    ),
                }}
            /> */}
            <Tab.Screen
                name={RouteName.MORE_SCREEN}
                component={MoreScreen}
                options={{
                    tabBarLabel: '',
                    tabBarAccessibilityLabel: 'More Screen',
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            focused={focused}
                            color={color}
                            iconComponent={MaterialCommunityIcons}
                            iconName="more"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
