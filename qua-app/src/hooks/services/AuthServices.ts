import axios from "axios";
import { Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Linking } from 'react-native';


const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?response_type=code";
const BASE_URL = "http://localhost:8081"

const KAKAO_CLIENT_ID = "941454427746b572c3db886d7663f80e";
const REDIRECT_URI = "http://15.165.90.235:3000/api/user/login/kakao"; 
const API_SERVER = "http://15.165.90.235:3000"; 


export const AuthService = () => {
  const getKakaoLoginUrl = () => {
    return `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${BASE_URL}`;
  };

  // 🔹 2️⃣ 카카오 로그인 실행 (WebView 없이 Linking 사용)
  const loginWithKakao = async () => {
    try {
      const kakaoLoginUrl = getKakaoLoginUrl();
      await Linking.openURL(kakaoLoginUrl); // 카카오 로그인 페이지 열기
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
    }
  };

  // 🔹 3️⃣ 서버로 Authorization Code 전달하여 Access Token 발급
  const getAccessToken = async (authCode: string) => {
    try {
      const response = await axios.post(`${API_SERVER}/api/user/login/kakao`, {
        code: authCode, // Authorization Code 전달
      });

      if (response.data && response.data.accessToken) {
        return response.data.accessToken;
      } else {
        throw new Error('Access Token을 받지 못했습니다.');
      }
    } catch (error) {
      console.error('토큰 요청 실패:', error);
      throw error;
    }
  };

  return { getKakaoLoginUrl, loginWithKakao, getAccessToken };
};

