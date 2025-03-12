import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserStore } from "../shared/hooks/stores/user";
import LoginScreen from "../screens/onBoarding/login";
import MainNavigator from "./tabNav";
import OnBoardingNavigator from "./onBoardingNav";
import { RootParamList } from "../types/type";
import TabNavigator from "./tabNav";

import { startStore } from "../shared/hooks/stores/start";
import SplashNavigator from "./splashNav";
const Stack = createStackNavigator<RootParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashNavigator}/>
      <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}
