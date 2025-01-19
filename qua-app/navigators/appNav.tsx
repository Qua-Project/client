import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useUserStore } from "../hooks/stores/user";
import LoginScreen from "../screens/onBoarding/login";
import MainNavigator from "./mainNav";
import { RootParamList } from "../types";

const Stack = createStackNavigator<RootParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
}

