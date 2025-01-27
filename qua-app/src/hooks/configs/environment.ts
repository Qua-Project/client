import Constants from "expo-constants";
import { Platform } from "react-native";

// BASE_URL 추출
export const BASE_URL = Constants.expoConfig?.extra?.backendUrl;
    
if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in app.json or .env");
}

export const REDIRECT_URI =
    Platform.OS === "web"
      ? "http://localhost:8081/auth"
      : Platform.OS === "ios" || Platform.OS === "android"
      ? "qua-app://auth"
      : `https://auth.expo.io/@${Constants.expoConfig?.name}/${Constants.expoConfig?.slug}`;
  
export const KAKAO_REST_API_KEY = Constants.expoConfig?.extra?.kakaoRestApiKey;