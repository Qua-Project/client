import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/searchMain";
import SearchProductScreen from "../screens/search/searchProduct";
import RankingScreen from "../screens/search/ranking";

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
      <SearchStack.Screen name="Ranking" component={RankingScreen} />
    </SearchStack.Navigator>
  );
}
