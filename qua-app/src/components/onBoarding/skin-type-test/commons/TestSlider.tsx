import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import styled from '@emotion/native';
import { TEST_SLIDE_DATA } from '../utils/constants';
const screenWidth = Math.round(Dimensions.get('window').width);
import TestItem from './TestItem';

const TestSlider:React.FC = () => {
  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
      console.log(scrollX);
    }
  });
  return (
    <Container>
      <Animated.FlatList 
        data={TEST_SLIDE_DATA} 
        renderItem={({item, index})=> (
          <TestItem item={item} index={index} scrollX={scrollX}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}
      />
    </Container>
  );
}
const Container = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;
export default TestSlider;


