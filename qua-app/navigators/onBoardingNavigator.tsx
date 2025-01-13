import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import startScreen from "../screens/onBoarding/start";

const OnBoardingStack = createStackNavigator();

export default function onBoardingNavigator() {
  return (
    <OnBoardingStack.Navigator>
      <OnBoardingStack.Screen name="start" component={startScreen} />
    </OnBoardingStack.Navigator>
  );
}
