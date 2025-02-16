import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';
import styled from '@emotion/native';
import ProfileContainer from './ProfileContainer';
import SkinDataContainer from './SkinDataContainer';
import SolutionContainer from './SolutionContainer';
import MyDresserRange from './DresserPosition';
import ExploreDresserContainer from './ExploreDresserContainer';
import { PROFILE_DATA, SKIN_DATA } from '../../util/constants';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MIN_HEIGHT = SCREEN_HEIGHT * 0.20;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.85;

const MyDresserBottomSheet = () => {
  const [translateY] = useState(new Animated.Value(SCREEN_HEIGHT - MIN_HEIGHT));

  const panResponder = PanResponder.create({
  onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 5,
  onPanResponderMove: (_, gestureState) => {
    const newTranslateY = Math.min(
      SCREEN_HEIGHT - MIN_HEIGHT, // ✅ 최소 위치 제한 (기본 상태)
      Math.max(SCREEN_HEIGHT - MAX_HEIGHT, gestureState.dy + translateY._value) // ✅ 최대 확장 위치 제한
    );
    translateY.setValue(newTranslateY);
  },
  onPanResponderRelease: (_, gestureState) => {
    if (gestureState.dy < -50) {
      // ✅ 위로 올리면 MAX_HEIGHT로 확장
      Animated.spring(translateY, {
        toValue: SCREEN_HEIGHT - MAX_HEIGHT,
        friction: 7,
        useNativeDriver: true,
      }).start();
    } else {
      // ✅ 기본 상태 (MIN_HEIGHT)로 복귀
      Animated.spring(translateY, {
        toValue: SCREEN_HEIGHT - MIN_HEIGHT,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }
  },
});

  return (
    <AnimatedBottomSheet style={{ transform: [{ translateY }] }} {...panResponder.panHandlers}>
      <DragHandle source={require('@assets/home/back.png')} />
      <FullContentContainer>
        <ContentContainer>
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
        </ContentContainer>
      </FullContentContainer>
    </AnimatedBottomSheet>    
  );
};

export default MyDresserBottomSheet;

/* 🔹 바텀시트 */
const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  bottom: 0;
  width: 100%;
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
  margin-bottom:10px;
`;

const FullContentContainer = styled.View`
  flex-direction: col;
  gap: 30px;
  padding-horizontal: 20px;
  padding-top: 5px;
  height: 100%;
`

const ContentContainer = styled.View`
  flex-direction: col;
  height: 100%;
  gap: 24px;
`

const Divider = styled.View`
  height: 0.5px;
  width: 100%;
  padding-forizontal: 20px;
  background-color: #DBDBDB;
`


