import axios from 'axios';
import { BASEURL } from './url';

// ✅ 저장된 토큰 가져오기 (AsyncStorage 사용)
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ 요청 전에 토큰을 자동으로 추가하는 인터셉터 설정
API.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken'); // 🔹 저장된 토큰 불러오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ✅ 헤더에 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
