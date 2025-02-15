import {Image} from 'react-native'
import React, { useState } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import styled from '@emotion/native';

const { height } = Dimensions.get('window');
const MIN_HEIGHT = 0;
const MAX_HEIGHT = -height*0.5;

const MyDresser: React.FC = () => {
  const [translateY] = useState(new Animated.Value(MIN_HEIGHT)); // ✅ 기본값: 약간 올라온 상태

  // ✅ 바텀시트 드래그 핸들링
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 5,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy < 0) {
        translateY.setValue(Math.max(MAX_HEIGHT, gestureState.dy + MIN_HEIGHT)); // ✅ 최대 높이 제한
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy < -50) {
        // ✅ 위로 올리면 최대 확장
        Animated.spring(translateY, {
          toValue: MAX_HEIGHT, // 확장된 상태
          friction: 7, // ✅ 부드러운 애니메이션
          useNativeDriver: true,
        }).start();
      } else {
        // ✅ 기본 상태로 복귀
        Animated.spring(translateY, {
          toValue: MIN_HEIGHT,
          friction: 7, // ✅ 부드러운 애니메이션
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Container>
      {/* 🔹 중앙 메인 이미지 */}
      <MainImage source={require('@assets/home/dressing_table.png')} />

{/* 🔹 바텀시트 (아래 프로필 섹션) */}
      <AnimatedBottomSheet style={{ transform: [{ translateY }] }} {...panResponder.panHandlers}>
        <DragHandle />
        <ProfileSection>
          <ProfileImage source={require('@assets/home/profile/profile.png')} />
          <ProfileText>쿠쿠아</ProfileText>
          <FollowInfo>
            <FollowText>팔로워 55</FollowText>
            <FollowText>팔로잉 70</FollowText>
          </FollowInfo>
        </ProfileSection>

        <SkinDataContainer>
          <SkinDataRow>
            <SkinDataLabel>유분감</SkinDataLabel>
            <SkinDataBar progress={0.68} />
            <SkinDataPercent>68%</SkinDataPercent>
          </SkinDataRow>
          <SkinDataRow>
            <SkinDataLabel>수분감</SkinDataLabel>
            <SkinDataBar progress={0.8} active />
            <SkinDataPercent>80%</SkinDataPercent>
          </SkinDataRow>
          <SkinDataRow>
            <SkinDataLabel>민감도</SkinDataLabel>
            <SkinDataBar progress={0.4} />
            <SkinDataPercent>40%</SkinDataPercent>
          </SkinDataRow>
        </SkinDataContainer>
      </AnimatedBottomSheet>        
    </Container>
    
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

/* 🔹 중앙 이미지 */
const MainImage = styled.Image`
  width: 100%;
  z-index: -1;
  position: relative;
  resize-mode: cover;
  margin-top: 10px;
`;

/* 🔹 사용자 정보 */
const UserInfoContainer = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 20px;
  margin: 10px 20px;
  elevation: 5;
`;

/* 🔹 바텀시트 */
const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  elevation: 5;
`;

/* 🔹 드래그 핸들 */
const DragHandle = styled.View`
  width: 40px;
  height: 5px;
  background-color: #ccc;
  border-radius: 2.5px;
  align-self: center;
  margin-bottom: 10px;
`;

/* 🔹 프로필 섹션 */
const ProfileSection = styled.View`
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 5px;
`;

const ProfileText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const FollowInfo = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const FollowText = styled.Text`
  font-size: 12px;
  color: #666;
  margin-left: 10px;
`;

/* 🔹 피부 데이터 */
const SkinDataContainer = styled.View`
  margin-top: 10px;
`;

const SkinDataRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const SkinDataLabel = styled.Text`
  font-size: 12px;
  width: 50px;
`;

const SkinDataBar = styled.View<{ progress: number; active?: boolean }>`
  flex: 1;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#658ef4' : '#ccc')};
  width: ${({ progress }) => progress * 100}%;
`;

const SkinDataPercent = styled.Text`
  font-size: 12px;
  margin-left: 5px;
`;

export default MyDresser;
