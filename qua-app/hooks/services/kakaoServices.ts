import { makeRedirectUri, AuthRequestConfig } from "expo-auth-session";
//import { BASE_URL, KAKAO_REST_API_KEY, REDIRECT_URI } from "../configs/environment";
import { useUserStore } from "../stores/user";
import { saveToken } from "./storageService";
import { Platform } from "react-native";
import Constants from "expo-constants";

const KAKAO_AUTH_URL = "https://kauth.kakao.com";
const KAKAO_API_URL = "https://kapi.kakao.com";

export const REST_API_KEY = "941454427746b572c3db886d7663f80e"

export const KAKAO_REDIRECT_URI = 
        Platform.OS === "web"
      ? "http://localhost:8081/auth" // 웹 환경
      : Platform.OS === "ios" || Platform.OS === "android"
      ? `https://auth.expo.io/@${Constants.manifest?.extra?.username}/${Constants.manifest?.slug}` // Expo Proxy
      : "qua-app://auth";


export const getAccessToken = async (code: string): Promise<string | null> => {
  try {
    const response = await fetch(`${KAKAO_AUTH_URL}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: REST_API_KEY, 
        redirect_uri: KAKAO_REDIRECT_URI, 
        code, 
      }).toString(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    console.log("액세스 토큰:", data.access_token);
    return data.access_token;
  } catch (error) {
    console.error("액세스 토큰 요청 중 오류 발생:", error);
    return null;
  }
};

export const getUserInfo = async (accessToken: string): Promise<any | null> => {
  try {
    const response = await fetch(`${KAKAO_API_URL}/v2/user/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    const data = await response.json();
    console.log("사용자 정보:", data);
    return data;
  } catch (error) {
    console.error("사용자 정보 요청 중 오류 발생:", error);
    return null;
  }
};

export const getAuthRequestConfig = (clientId: string) : AuthRequestConfig => {
  let redirectUri =
        Platform.OS === "web"
      ? "http://localhost:8081/auth" // 웹 환경
      : Platform.OS === "ios" || Platform.OS === "android"
      ? `https://auth.expo.io/@${Constants.manifest?.extra?.username}/${Constants.manifest?.slug}` // Expo Proxy
      : "qua-app://auth";

  return {
    clientId,
    redirectUri,
    responseType: "code",
    scopes: ["profile_nickname"], // 요청 권한
  };
};

export const sendCodeToBackend = async (code: string) => {
  try {
    const response = await fetch(`https://qua-app.com/api/user/login/kakao?code=${code}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to login with Kakao");
    }

    return await response.json(); // 백엔드에서 JWT 또는 사용자 정보를 반환
  } catch (error) {
    console.error("Error sending code to backend:", error);
    throw error;
  }
};

export const handleLogin = async (code: string) => {
  const { setAccessToken, setUserInfo } = useUserStore();

  try {
    const backendResponse = await sendCodeToBackend(code);

    const token = backendResponse.token;
    const userInfo = backendResponse.user;

    setAccessToken(token);
    setUserInfo(userInfo);
    await saveToken(token);

    console.log("로그인 성공:", { token, userInfo });
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};