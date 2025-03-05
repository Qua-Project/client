import { BASEURL } from "../../configs/url";
import API from "../../configs/axios";
// import axios, { AxiosResponse } from "axios";
export const UserRscService = () => {
  const URI = "/api/user/me";

  const getUserInfo = async () => {
    try {
      const response = await API.get(URI); // ✅ 자동으로 토큰 포함됨
      console.log('✅ 사용자 정보:', response.data);
      return response.data as User.UserDto; // 🔹 JSON 응답 반환
    } catch (error) {
      console.error('❌ 사용자 정보 요청 실패:', error);
      return null;
    }

  };
  return {
    getUserInfo,
  };
};
