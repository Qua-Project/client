import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import KakaoButton from "../../../../utils/onBoarding/commons/KakaoButton";
import { getAuthRequestConfig, sendCodeToBackend, getAccessToken, getUserInfo, REST_API_KEY, KAKAO_REDIRECT_URI } from "../../../../../hooks/services/kakaoServices";

import { useAuthRequest } from "expo-auth-session";
import { useUserStore } from "../../../../../hooks/stores/user";
import { startStore } from "../../../../../hooks/stores/start";

const LoginContainer = () => {
  // const authConfig = getAuthRequestConfig(clientId);
  const { setLoggedIn } = useUserStore();
  const { setStart } = startStore();
  // const [request, response, promptAsync] = useAuthRequest(authConfig, {
  //   authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
  // });

  const clientId = REST_API_KEY
  console.log(clientId);
  const redirectUri = KAKAO_REDIRECT_URI;
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      redirectUri,
      responseType: "code",
      scopes: ["profile_nickname"], // 카카오에서 필요한 권한
    },
    { authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize" }
  );

  useEffect(() => {
    const handleAuthResponse = async () => {
      if (response?.type === "success" && response.params.code) {
        console.log("login success, auth code: ", response.params.code);
        try {
          const accessToken = await getAccessToken(response.params.code);
          if (accessToken) {
            const userInfo = await getUserInfo(accessToken);
            console.log("카카오 사용자 정보:", userInfo);

            setLoggedIn(true);

            //navigation.replace("Main");
          }
        } catch (error) {
          console.error("카카오 로그인 처리 실패:", error);
          Alert.alert("로그인 실패", "카카오 인증 중 문제가 발생했습니다.");
        }
        // try {
        //   // send authorization code to BE
        //   const backendResponse = await sendCodeToBackend(response.params.code);
          
        //   setLoggedIn(true);
        //   setStart(false);
          
        //   // check BE JWT
        //   console.log("로그인 성공", `JWT: ${backendResponse.token}`);
        // } catch (error) {
        //   console.error("로그인 실패:", error);
        //   Alert.alert("로그인 실패", "서버와의 통신 중 오류가 발생했습니다.");
        // }
      }else{
        console.error("login fail")
      }
    };

    handleAuthResponse();
  }, [response]);

  return (
    <View style={styles.container}>
      <KakaoButton onPress={() => promptAsync()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default LoginContainer;
