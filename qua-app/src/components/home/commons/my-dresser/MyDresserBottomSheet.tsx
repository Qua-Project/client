
import React, { useCallback } from 'react';
import { Dimensions, View, Text, Image, ScrollView } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styled from '@emotion/native';
import ProfileContainer from './ProfileContainer';
import SkinDataContainer from './SkinDataContainer';
import SolutionContainer from './SolutionContainer';
import MyDresserRange from './DresserPosition';
import ExploreDresserContainer from './ExploreDresserContainer';
import { PROFILE_DATA, SKIN_DATA } from '../../util/constants';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MIN_HEIGHT = SCREEN_HEIGHT * 0.35; // ✅ 기본 상태 높이
const MAX_HEIGHT = SCREEN_HEIGHT * 0.85; // ✅ 최대 확장 높이

const MyDresserBottomSheet = () => {
  const translateY = useSharedValue(SCREEN_HEIGHT - MIN_HEIGHT); // ✅ 기본 위치

  // ✅ 드래그 제스처
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = Math.max(SCREEN_HEIGHT - MAX_HEIGHT, Math.min(SCREEN_HEIGHT - MIN_HEIGHT, translateY.value + event.translationY));
    })
    .onEnd((event) => {
      if (event.velocityY < -500 || event.translationY < -50) {
        translateY.value = withSpring(SCREEN_HEIGHT - MAX_HEIGHT); // ✅ 위로 올리기
      } else {
        translateY.value = withSpring(SCREEN_HEIGHT - MIN_HEIGHT); // ✅ 기본 위치로 돌아오기
      }
    });

  // ✅ 애니메이션 스타일
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <AnimatedBottomSheet style={animatedStyle}>
        <DragHandle source={require('@assets/home/back.png')} />

        {/* 🔹 스크롤 가능하도록 ScrollView 적용 */}
        <ScrollableContent>
          <ProfileContainer
            userName={PROFILE_DATA.name}
            userImage={PROFILE_DATA.image}
            follower={PROFILE_DATA.follower}
            following={PROFILE_DATA.followeing}
          ></ProfileContainer>
          <SkinDataContainer
            total={SKIN_DATA.total}
            moisture={SKIN_DATA.moisture}
            oil={SKIN_DATA.oil}
            sensitivity={SKIN_DATA.sensitivity}
          ></SkinDataContainer>
          <SolutionContainer/>
          <MyDresserRange/>
          <Divider/>
          <ExploreDresserContainer/>
        </ScrollableContent>
      </AnimatedBottomSheet>
    </GestureDetector>
  );
};

export default MyDresserBottomSheet;

/* 🔹 바텀시트 */
const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${MAX_HEIGHT}px; /* ✅ 전체 높이 */
  background-color: white;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  elevation: 5;
`;

/* 🔹 드래그 핸들 */
const DragHandle = styled.Image`
  width: 34px;
  height: 9px;
  margin-bottom: 10px;
`;

/* 🔹 스크롤 가능한 컨텐츠 */
const ScrollableContent = styled(ScrollView)`
  width: 100%;
  height: ${MAX_HEIGHT - 100}px; /* ✅ 바텀시트 내에서 스크롤 가능하도록 조정 */
`;


const Divider = styled.View`
  height: 0.5px;
  width: 100%;
  background-color: #dbdbdb;
  margin-top: 10px;
`;
