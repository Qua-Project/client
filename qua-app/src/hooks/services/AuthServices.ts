import axios from "axios";
import { Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?response_type=code";
const BASE_URL = "https://localhost:8000"

const KAKAO_CLIENT_ID = "941454427746b572c3db886d7663f80e";
const REDIRECT_URI = "http://15.165.90.235:3000/api/user/login/kakao"; 
const API_SERVER = "http://15.165.90.235:3000"; 


export const AuthService = () => {
  const handleLogin = async () => {
    try {
      const authUrl = `${KAKAO_AUTH_URL}&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

      // 카카오 로그인 페이지 열기
      const result = await WebBrowser.openAuthSessionAsync(authUrl, REDIRECT_URI);

      if (result.type === "success" && result.url) {
        // Redirect URI에서 인가 코드 파싱
        const code = new URL(result.url).searchParams.get("code");
        console.log(code);
        
        if (code) {
          console.log("Authorization Code:", code);

          const accessToken = await getKakoaAccessToken(code);
          console.log(accessToken);
          //const userInfo = await getUserInfo(accessToken);
          //getLogin(code);
          //console.log("User Info:", userInfo);
          //Alert.alert("로그인 성공", `환영합니다, ${userInfo.properties.nickname}님!`);
        } else {
          Alert.alert("로그인 실패", "인가 코드를 가져올 수 없습니다.");
        }
      }
    } catch (error) {
      console.error("카카오 로그인 처리 실패:", error);
      Alert.alert("로그인 실패", "카카오 로그인 중 오류가 발생했습니다.");
    }
  };


  const getKakoaAccessToken = async (code: string): Promise<string> => {
    try {
      const response = await axios.post(
        `${KAKAO_AUTH_URL}/oauth/token`,
        new URLSearchParams({
          grant_type: "authorization_code",
          client_id: `${KAKAO_CLIENT_ID}`, 
          redirect_uri: `${REDIRECT_URI}`,   
          code,                              
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data.access_token;
    } catch (error) {
      console.error("Access token fetch failed:", error);
      throw error;
    }
  };

  const getUserInfo = async (accessToken: string): Promise<any> => {
    try {
      const response = await axios.get(`${API_SERVER}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("User info fetch failed:", error);
      throw error;
    }
  };

  const getLogin = async (code:string) => {
    const response = await fetch(`${API_SERVER}/api/user/login/kakao?code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    const data = await response.json();
    console.log("Backend Response:", data);

    Alert.alert("로그인 성공", `환영합니다, ${data.nickname}님!`);
  };


  return { handleLogin,getKakoaAccessToken, getUserInfo, getLogin };
};

