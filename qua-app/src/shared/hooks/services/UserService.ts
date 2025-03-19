import API from "../../configs/axios";

export const UserRscService = () => {
  const URI = "/api/user/me";

  const getUserInfo = async () => {
    try {
      const response = await API.get(URI); 
      console.log(response.data);
      return response.data as User.UserDto; 
    } catch (error) {
      console.error("사용자 정보 get:", error);
      return null;
    }
  };
  
  const updateUserInfo = async (data: User.UpdateMeRequestDto) => {
    try {
      const response = await API.put(URI, data);
      return response.data as User.UpdateMeResponseDto;
    }catch (error) {
      console.error("사용자 정보 put:", error);
      return null;
    }
  }
  return {
    getUserInfo,
    updateUserInfo,
  };
};