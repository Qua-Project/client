import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

export default function App(): JSX.Element {
  return <SafeAreaProvider></SafeAreaProvider>;
}
