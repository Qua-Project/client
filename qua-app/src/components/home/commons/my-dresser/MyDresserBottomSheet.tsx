
import React, { useCallback } from 'react';
import { Dimensions, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import styled from '@emotion/native';
import ProfileContainer from './ProfileContainer';
import SkinDataContainer from '../../../commons/SkinDataContainer';
import SolutionContainer from './SolutionContainer';
import DresserPosition from './DresserPosition';
import ExploreDresserContainer from './ExploreDresserContainer';
import { PROFILE_DATA, SKIN_DATA } from '../../util/constants';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const MIN_HEIGHT = SCREEN_HEIGHT * 0.4; 
const MAX_HEIGHT = SCREEN_HEIGHT * 0.75; 

const MyDresserBottomSheet:React.FC = () => {
  const translateY = useSharedValue(SCREEN_HEIGHT - MIN_HEIGHT); 

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateY.value = Math.max(SCREEN_HEIGHT - MAX_HEIGHT, Math.min(SCREEN_HEIGHT - MIN_HEIGHT, translateY.value + event.translationY));
    })
    .onEnd((event) => {
      if (event.velocityY < -500 || event.translationY < -50) {
        translateY.value = withSpring(SCREEN_HEIGHT - MAX_HEIGHT);
      } else {
        translateY.value = withSpring(SCREEN_HEIGHT - MIN_HEIGHT); 
      }
    });

  // ✅ 애니메이션 스타일
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const data = [
    {id:'profile', content: <ProfileContainer
      userName={PROFILE_DATA.name}
      userImage={PROFILE_DATA.image}
      follower={PROFILE_DATA.follower}
      following={PROFILE_DATA.followeing}
    ></ProfileContainer>},
    {id: 'skin-data', content: <SkinDataContainer
            total={SKIN_DATA.total}
            moisture={SKIN_DATA.moisture}
            oil={SKIN_DATA.oil}
            sensitivity={SKIN_DATA.sensitivity}
          ></SkinDataContainer>},
    {id: 'solution', content: <SolutionContainer/>},
    {id: 'position', content: <DresserPosition/>},
    {id: 'slider', content: <Divider/>},
    {id: 'explore', content: <ExploreDresserContainer/>},
  ]

  return (
    <Container>
      <GestureDetector gesture={panGesture}>
        <AnimatedBottomSheet style={animatedStyle}>
          <DragHandle source={require('@assets/home/back.png')} />
          <ContentContainer>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                item.content
              )}
              contentContainerStyle={{ width: "100%", marginBottom: 20 }} 
              showsVerticalScrollIndicator={false}
            />
          </ContentContainer>
        </AnimatedBottomSheet>
      </GestureDetector>
    </Container>
    
  );
};

export default MyDresserBottomSheet;

const AnimatedBottomSheet = styled(Animated.View)`
  width: 100%;
  height: ${MAX_HEIGHT}px; /* ✅ 전체 높이 */
  background-color: white;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  shadow-color: #AAAAAB;
  shadow-offset: 0px -4px;
  shadow-opacity: 0.15;
  shadow-radius: 15px;
  elevation: 5;
  padding: 15px;
`;

const DragHandle = styled.Image`
  width: 34px;
  height: 9px;
  margin-bottom: 10px;
`;

const ContentContainer = styled.View`  
  justify-content: center;
  width: 100%;
`;

const Container = styled.View` 
  z-index: 100;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

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
