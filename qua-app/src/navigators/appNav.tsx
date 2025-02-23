import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserStore } from "../hooks/stores/user";
import LoginScreen from "../screens/onBoarding/login";
import MainNavigator from "./tabNav";
import OnBoardingNavigator from "./onBoardingNav";
import { RootParamList } from "../types/type";
import TabNavigator from "./tabNav";

import { startStore } from "../hooks/stores/start";
const Stack = createStackNavigator<RootParamList>();

export default function AppNavigator() {
  const isStart = startStore((state) => state.isStart);
  console.log(isStart);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isStart ? (
        <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} />
      ) : (
        <Stack.Screen name="Tab" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
}
