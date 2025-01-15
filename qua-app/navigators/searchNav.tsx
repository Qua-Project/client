import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/search/main";

const SearchStack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="main" component={MainScreen} />
    </SearchStack.Navigator>
  );
}
