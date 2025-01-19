import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingNavigator from "./onBoardingNav";
import MainNavigator from "./mainNav";
import { useUserStore } from "../hooks/stores/user";
import { startStore } from "../hooks/stores/start";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isStart } = startStore(); // OnBoarding 상태
  const { isLoggedIn } = useUserStore(); // 로그인 상태
  console.log("isStart:", isStart, "isLoggedIn:", isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* OnBoarding 흐름 */}
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Login" component={OnBoardingNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
