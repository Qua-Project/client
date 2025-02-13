import React, {useEffect} from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { AuthService } from "../../../hooks/services/AuthServices";
import KakaoButton from "./commons/KakaoButton";
import { useUserStore } from "../../../hooks/stores/user"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../../types/type"; 
import AppleLoginButton from "./commons/AppleButton";
import { Linking } from 'react-native';


const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";

type LoginScreenNavigationProp = StackNavigationProp<RootParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { setLoggedIn, setUserInfo, userInfo } = useUserStore();
  console.log(userInfo);

  const {loginWithKakao} = AuthService();
  const handleKakaoLogin = async () => {
    await loginWithKakao();
    navigation.navigate('OnBoarding'); 
  };
  useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      const url = event.url;
      const codeMatch = url.match(/code=([^&]+)/);
      console.log('🔑 카카오 Authorization Code:', codeMatch);
      if (codeMatch) {
        const authCode = codeMatch[1]; // Authorization Code 추출
        console.log('🔑 카카오 Authorization Code:', authCode);
      }
    };
    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);
  
  

  return (
    <View style={styles.container}>
      <KakaoButton onPress={handleKakaoLogin} />
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
