import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/onBoarding/start";

const OnBoardingStack = createStackNavigator();

export default function OnBoardingNavigator() {
  return (
    <OnBoardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnBoardingStack.Screen name="start" component={StartScreen} />
    </OnBoardingStack.Navigator>
  );
}
