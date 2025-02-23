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
      <Stack.Screen name="SkinTypeReport" component={SkinTypeReportScreen} />
      <Stack.Screen name="SkinTypeTest" component={SkinTypeStartScreen} />
      <Stack.Screen name="SkinTypeResult" component={SkinTypeResultScreen} />
      <Stack.Screen name="nickname" component={NicknameScreen} />
      <Stack.Screen name="basic" component={BasicScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="SkinTypeStart" component={SkinTypeStartScreen} /> */}
      {/* <Stack.Screen name="Start" component={StartScreen} /> */}
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
