import {Image, View, Text, StyleSheet, FlatList} from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import styled from '@emotion/native';
import ExploreDresserItem from './ExploreDresserItem';


interface ProfileItem {
  id: string;
  content: () => JSX.Element; 
}

const profileData = [
  { id: '1', image: require('@assets/home/profile/profile.png'), score: 95},
  { id: '2', image: require('@assets/home/profile/profile.png'), score: 95},
  { id: '3', image: require('@assets/home/profile/profile.png'), score: 95},
  { id: '4', image: require('@assets/home/profile/profile.png'), score: 95},
];
const ExploreDresserContainer=() => {  
  return (
    <Container>
      <Title>상위권 화장대 구경하기</Title>
      <Subtitle>상위권 OMS타입은 무슨 화장품을 쓰는지 구경해보세요 !</Subtitle>
      
      <FlatList
        data={profileData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ExploreDresserItem
            image={item.image}
            score={item.score}
          />
        )}
        horizontal // ✅ 가로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 8 }}
      />
    </Container>
  );
};

export default ExploreDresserContainer;

const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  padding-vertical: 20px;
  margin-bottom: 40px;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20.8px;
  color: #081533;
  margin-bottom: 4px;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #818182;
  margin-bottom: 24px;
`;