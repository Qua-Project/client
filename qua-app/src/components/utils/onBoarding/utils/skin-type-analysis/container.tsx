/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@emotion/react';
import SkinTypeStartSlider from '../../commons/skin-type-analysis/SkinTypeStartSlider';
import SkinTypeTestSlider from '../../commons/skin-type-analysis/SkinTypeTestSlider';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const GradientBackground = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // 배경색은 Gradient로 처리
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'Pretendard'
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 28,
    marginTop: 30,
    height: 43,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#081533',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Pretendard'
  },
});

const SkinTypeStartContainer: React.FC = () => {
  const [activeStart, setActiveStart] = useState(false);
  const handleButtonClick = () => {
    setActiveStart(true);
  };
  const theme = useTheme(); // 테마 값 가져오기
  console.log(theme);
  return (
      <GradientBackground
        colors={[
          theme.colors.app_blue_grdaients.middle_blue,
          theme.colors.app_blue_grdaients.light_blue,
        ]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }}   
      >
        <View style={styles.container}>
          <Text style={styles.header}>피부 타입 분석</Text>
          {activeStart 
          ? (<>
            <SkinTypeTestSlider />
          </>)
          :(<>
            <SkinTypeStartSlider />
            <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
              <Text style={styles.buttonText}>시작하기</Text>
            </TouchableOpacity>
          </>)
          }
        </View>
      </GradientBackground>
    
  );
};


export default SkinTypeStartContainer;
