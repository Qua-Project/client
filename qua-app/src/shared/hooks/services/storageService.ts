import * as SecureStore from 'expo-secure-store';

// 🔹 토큰 저장 함수
export const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync('accessToken', token, {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  } catch (error) {
    console.error('🔴 토큰 저장 실패:', error);
  }
};

// 🔹 토큰 불러오기
export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync('accessToken');
  } catch (error) {
    console.error('🔴 토큰 불러오기 실패:', error);
    return null;
  }
};

// 🔹 토큰 삭제하기
export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('accessToken');
  } catch (error) {
    console.error('🔴 토큰 삭제 실패:', error);
  }
};
