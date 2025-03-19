/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type';
import { useAuthStore } from '@/src/shared/hooks/stores/auth';
import { useUserStore } from "@/src/shared/hooks/stores/user";
import { useSkinTypeStore } from '@/src/shared/hooks/stores/skin-type';
import { UserRscService } from '@/src/shared/hooks/services/UserService';
import { SkinTypeRscService } from '@/src/shared/hooks/services/SkinTypeServices';

const SplashContainer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Splash'>>(); 
  
  const { checkLoginStatus } = useAuthStore();
  const { setUsername, setGender, setBirthDate } = useUserStore();
  const { setSkinType, setUbunScore, setSubunScore, setMingamScore, setSkinConcern } = useSkinTypeStore();

  useEffect(() => {
    const initialize = async () => {
      const isLoggedIn = await checkLoginStatus();

      if (isLoggedIn) {
        try {
          const userService = UserRscService();
          const skinTypeService = SkinTypeRscService();

          const userInfo = await userService.getUserInfo();
          if (userInfo) {
            setUsername(userInfo.username);
            setGender(userInfo.gender);
            setBirthDate(userInfo.birthDate);
          }

          const skinTypeInfo = await skinTypeService.getTypeInfo();
          if (skinTypeInfo) {
            setSkinType(skinTypeInfo.skinType);
            setUbunScore(skinTypeInfo.ubunScore);
            setSubunScore(skinTypeInfo.subunScore);
            setMingamScore(skinTypeInfo.mingamScore);
            setSkinConcern(skinTypeInfo.skinConcern);
          }

          navigation.replace("Tab");
        } catch (error) {
          console.error("자동 로그인 중 오류 발생:", error);
          navigation.replace("OnBoarding");
        }
      } else {
        navigation.replace("OnBoarding");
      }
    };

    initialize();
  }, []);

  return (
      <GradientBackground
        colors={[
          "#CDDDFF",
          "#79A3FF",
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1  }}   
      >
        <ImageContainer source={require("@assets/Qua-splash.png")}/>
      </GradientBackground>
    
  );
};

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.Image`
  justify-content: center;
  align-items: center;
  width: 130;
  resize-mode: contain;
`

export default SplashContainer;
