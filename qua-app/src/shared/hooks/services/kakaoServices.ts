import axios from "axios";
import { Alert } from "react-native";

const KAKAO_AUTH_URL = "https://kauth.kakao.com";
const KAKAO_API_URL = "https://kapi.kakao.com";
const BASE_URL = "https://localhost:8000"

export const getAccessToken = async (code: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${KAKAO_AUTH_URL}/oauth/token`,
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: "941454427746b572c3db886d7663f80e", 
        redirect_uri: "http://localhost:8081",   
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

export const getUserInfo = async (accessToken: string): Promise<any> => {
  try {
    const response = await axios.get(`${KAKAO_API_URL}/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("User info fetch failed:", error);
    throw error;
  }
}

export const getLogin = async (code:string) => {
  const response = await fetch(`${BASE_URL}/api/user/login/kakao?code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await response.json();
  console.log("Backend Response:", data);

  Alert.alert("로그인 성공", `환영합니다, ${data.nickname}님!`);
}