import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {
  SplashScreen, WelcomeScreen, SearchScreen
} from '../screens/index';

import BottomTabNavigator from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={RouteName.SPLASH_SCREEN}
      >

        <Stack.Screen
          name={RouteName.SPLASH_SCREEN}
          component={SplashScreen}
        />

        <Stack.Screen
          name={RouteName.WELCOME_SCREEN}
          component={WelcomeScreen}
        />

        <Stack.Screen
          name={RouteName.BOTTOM_TAB}
          component={BottomTabNavigator}
        />

        <Stack.Screen
          name={RouteName.SEARCH_SCREEN}
          component={SearchScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;