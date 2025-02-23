import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserStore } from "../hooks/stores/user";
import LoginScreen from "../screens/onBoarding/login";
import MainNavigator from "./mainNav";
import OnBoardingNavigator from "./onBoardingNav";
import { RootParamList } from "../types/type";

import { startStore } from "../stores/startStore";
const Stack = createStackNavigator<RootParamList>();

export default function AppNavigator() {
  const isStart = startStore((state) => state.isStart);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isStart ? (
        <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} />
      ) : (
        <Stack.Screen name="Main" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
}
