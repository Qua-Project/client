import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { getAccessToken, getUserInfo, getLogin } from "../../../../../hooks/services/kakaoServices";
import KakaoButton from "../../commons/KakaoButton";
import { useUserStore } from "../../../../../hooks/stores/user";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../../../../../types";


const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";

type LoginScreenNavigationProp = StackNavigationProp<RootParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { setLoggedIn, setUserInfo, userInfo } = useUserStore();
  console.log(userInfo);

  const handleLogin = async () => {
    try {
      const redirectUri = "http://localhost:8081"; // 카카오 개발자 콘솔에 등록된 Redirect URI
      const clientId = "941454427746b572c3db886d7663f80e";

      const authUrl = `${KAKAO_AUTH_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

      // 카카오 로그인 페이지 열기
      const result = await WebBrowser.openAuthSessionAsync(authUrl, redirectUri);

      if (result.type === "success" && result.url) {
        // Redirect URI에서 인가 코드 파싱
        const code = new URL(result.url).searchParams.get("code");
        if (code) {
          console.log("Authorization Code:", code);

          const accessToken = await getAccessToken(code);
          const userInfo = await getUserInfo(accessToken);
          getLogin(code);
          console.log("User Info:", userInfo);
          Alert.alert("로그인 성공", `환영합니다, ${userInfo.properties.nickname}님!`);
        } else {
          Alert.alert("로그인 실패", "인가 코드를 가져올 수 없습니다.");
        }
      }
    } catch (error) {
      console.error("카카오 로그인 처리 실패:", error);
      Alert.alert("로그인 실패", "카카오 로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <View style={styles.container}>
      <KakaoButton onPress={handleLogin} />
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
