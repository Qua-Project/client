import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("accessToken", token);
    console.log("토큰 저장 성공:", token);
  } catch (error) {
    console.error("토큰 저장 실패:", error);
  }
};

export const loadToken = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");
    console.log("저장된 토큰:", token);
    return token;
  } catch (error) {
    console.error("토큰 로드 실패:", error);
    return null;
  }
};
