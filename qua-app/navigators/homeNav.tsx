import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/home/main";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={MainScreen} />
    </HomeStack.Navigator>
  );
}
