import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { AuthService } from "../../../hooks/services/AuthServices";
import KakaoButton from "./commons/KakaoButton";
import { useUserStore } from "../../../hooks/stores/user"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../../types/type"; 
import AppleLoginButton from "./commons/AppleButton";


const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";

type LoginScreenNavigationProp = StackNavigationProp<RootParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { setLoggedIn, setUserInfo, userInfo } = useUserStore();
  console.log(userInfo);

  const { handleLogin } = AuthService();

  

  return (
    <View style={styles.container}>
      <KakaoButton onPress={handleLogin} />
      <AppleLoginButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
