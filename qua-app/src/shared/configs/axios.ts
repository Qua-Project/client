import axios from 'axios';
import { BASEURL } from './url';
import * as SecureStore from 'expo-secure-store';

// ✅ 저장된 토큰 가져오기 (AsyncStorage 사용)
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const FORMAPI = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

API.interceptors.request.use(
  async (config) => {
    //const token = await AsyncStorage.getItem('accessToken'); 
    const token = await SecureStore.getItemAsync('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
