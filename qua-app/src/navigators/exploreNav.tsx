import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/explore/main";

const ExploreStack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExploreStack.Screen name="main" component={MainScreen} />
    </ExploreStack.Navigator>
  );
}
