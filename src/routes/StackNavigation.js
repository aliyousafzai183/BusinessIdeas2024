import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {
  SplashScreen, WelcomeScreen, NameScreen
} from '../screens/index';

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
          name={RouteName.NAME_SCREEN}
          component={NameScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;