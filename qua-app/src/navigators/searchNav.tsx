import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/searchMain";
import SearchProductScreen from "../screens/search/searchProduct";

const SearchStack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchProduct" component={SearchProductScreen} />
    </SearchStack.Navigator>
  );
}
