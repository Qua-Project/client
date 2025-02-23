import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/explore/main";
import DetailScreen from "../screens/explore/detail";
import ReportScreen from "../screens/explore/report";

const ExploreStack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExploreStack.Screen name="main" component={MainScreen} />
      <ExploreStack.Screen name="detail" component={DetailScreen} />
      <ExploreStack.Screen name="report" component={ReportScreen} />
    </ExploreStack.Navigator>
  );
}
