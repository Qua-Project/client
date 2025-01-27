import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigators/appNav";
import { ThemeProvider } from "@emotion/react";
import theme from "./src/themes/theme";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const loadFonts = async () => {
  await Font.loadAsync({
    'Pretendard-Regular': require('./src/assets/fonts/Pretendard-Regular.ttf'),
    'Pretendard-Bold': require('./src//assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-Light': require('./src//assets/fonts/Pretendard-Light.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
