/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type';
import { useAuthStore } from '@/src/shared/hooks/stores/auth';

const SplashContainer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Splash'>>(); 
  
  const { checkLoginStatus } = useAuthStore();

  useEffect(() => {
    const initialize = async () => {
      const isLoggedIn = await checkLoginStatus(); // ✅ SecureStore에서 로그인 상태 확인
      setTimeout(() => {
        if (isLoggedIn) {
          navigation.replace('Tab'); // ✅ 로그인 상태라면 메인으로 이동
        } else {
          navigation.replace('Login'); // ✅ 로그인 안 되어 있으면 로그인 화면으로 이동
        }
      }, 2000);
    };

    initialize();
  }, []);

  return (
      <GradientBackground
        colors={[
          "#79A3FF",
          "#CDDDFF",
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
