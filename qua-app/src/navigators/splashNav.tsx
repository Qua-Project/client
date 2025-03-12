import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/onBoarding/splash";

const SplashStack = createStackNavigator();

export default function SplashNavigator() {
  return (
    <SplashStack.Navigator screenOptions={{headerShown: false,}}>
      <SplashStack.Screen name="Splash" component={SplashScreen} />
    </SplashStack.Navigator>
  );
}
