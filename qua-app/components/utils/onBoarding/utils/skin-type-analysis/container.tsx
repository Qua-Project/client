/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import { SafeAreaView } from 'react-native-safe-area-context';

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ThemedText = styled.Text`
  font-size: 24px;
  color: #081533; // 테마의 텍스트 색상 사용
`;

const SkinTypeStartContainer = () => {
  const theme = useTheme(); // 테마 값 가져오기
  console.log(theme);
  return (
      <GradientBackground
        colors={[
          '#CDDDFF',
          '#79A3FF',
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }}   
      >
      </GradientBackground>
    
  );
};


export default SkinTypeStartContainer;
