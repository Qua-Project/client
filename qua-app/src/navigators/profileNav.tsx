import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/profile/main";

const ProfileStack = createStackNavigator();

export default function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="main" component={MainScreen} />
    </ProfileStack.Navigator>
  );
}
