import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserStore } from "../hooks/stores/user";
import LoginScreen from "../screens/onBoarding/login";
import MainNavigator from "./tabNav";
import OnBoardingNavigator from "./onBoardingNav";
import { RootParamList } from "../types/type";
import TabNavigator from "./tabNav";

const Stack = createStackNavigator<RootParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} /> */}
    </Stack.Navigator>
  );
}

