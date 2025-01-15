import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { startStore } from "./hooks/stores/start";

import OnBoardingNavigator from "./navigators/onBoardingNav";
import MainScreen from "./screens/main";

export default function App() {
  const { isStart } = startStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isStart ? <OnBoardingNavigator /> : <MainScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
