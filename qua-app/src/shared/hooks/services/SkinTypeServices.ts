import API from "../../configs/axios";

export const SkinTypeRscService = () => {
  const URI = "/api/user/type";

  const getTypeInfo = async () => {
    try {
      const response = await API.get(URI); 
      
      console.log("skintype get ", response.data);
      return response.data as SkinType.SkinTypeDto; 
    } catch (error) {
      console.error("skintype 정보 get:", error);
      return null;
    }
  };
  
  const updateTypeInfo = async (data: SkinType.UpdateTypeRequestDto) => {
    try {
      const response = await API.put(URI, data);
      if (response.status === 200) {
        console.log("✅ 사용자 정보 업데이트 성공");
        return true;
      }

      return false; 
    } catch (error) {
      console.error("skintype 업데이트 실패:", error);
      return false; 
    };
  };

  const createTypeInfo = async (data: SkinType.CreateTypeRequestDto) => {
    try {
      const response = await API.post(URI, data);
      if (response.status === 200) {
        console.log("✅ 사용자 정보 업데이트 성공");
        return true;
      }

      return false; 
    } catch (error) {
      console.error("skintype post 실패:", error);
      return false; 
    };
  };
  
  return {
    getTypeInfo,
    updateTypeInfo,
    createTypeInfo 
  };
};