import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/home/main";
import AddScreen from "../screens/home/add";

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={MainScreen} />
      <HomeStack.Screen name="add" component={AddScreen} />
    </HomeStack.Navigator>
  );
}
