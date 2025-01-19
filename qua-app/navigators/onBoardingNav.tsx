// navigators/onBoardingNav.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/onBoarding/start';
import LoginScreen from '../screens/onBoarding/login';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Start" component={StartScreen} /> */}
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
