// navigators/onBoardingNav.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/onBoarding/start';
import LoginScreen from '../screens/onBoarding/login';
import SkinTypeStartScreen from '../screens/onBoarding/skinTypeStart';
import SkinTypeResultScreen from '../screens/onBoarding/skinTypeResult';
import SkinTypeReportScreen from '../screens/onBoarding/skinTypeReport';
import NicknameScreen from "../screens/onBoarding/nickname";
import BasicScreen from "../screens/onBoarding/basic";

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Nickname" component={NicknameScreen} />
      <Stack.Screen name="Basic" component={BasicScreen} />
      <Stack.Screen name="SkinTypeTest" component={SkinTypeStartScreen} />
      <Stack.Screen name="SkinTypeResult" component={SkinTypeResultScreen} />
      <Stack.Screen name="SkinTypeReport" component={SkinTypeReportScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
