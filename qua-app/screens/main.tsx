import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeNavigator from "../navigators/homeNav";
import SearchNavigator from "../navigators/searchNav";
import ExploreNavigator from "../navigators/exploreNav";
import ProfileNavigator from "../navigators/profileNav";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "tab1") {
            return (
              <Feather
                name="home"
                size={23}
                color={focused ? "#5565F2" : "#DBDBDB"}
              />
            );
          } else if (route.name === "tab2") {
            return (
              <MaterialCommunityIcons
                name="medal-outline"
                size={24}
                color={focused ? "#5565F2" : "#DBDBDB"}
              />
            );
          } else if (route.name === "tab3") {
            return (
              <MaterialIcons
                name="explore"
                size={24}
                color={focused ? "#5565F2" : "#DBDBDB"}
              />
            );
          } else if (route.name === "tab4") {
            return (
              <Ionicons
                name="person-outline"
                size={24}
                color={focused ? "#5565F2" : "#DBDBDB"}
              />
            );
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="tab1"
        component={HomeNavigator}
        options={{
          tabBarLabel: "홈",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab2"
        component={SearchNavigator}
        options={{
          tabBarLabel: "적합도 검색",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab3"
        component={ExploreNavigator}
        options={{
          tabBarLabel: "둘러보기",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
      <Tab.Screen
        name="tab4"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "마이페이지",
          tabBarActiveTintColor: "#5565F2",
        }}
      />
    </Tab.Navigator>
  );
}
