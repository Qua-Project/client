import React, { useRef, useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Text } from 'react-native';
import SkinTypeStartCard from './SkinTypeStartCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { START_SLIDE_DATA } from '../utils/constants';

const { width: screenWidth } = Dimensions.get('window');

const SkinTypeSlider: React.FC = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0); // CardContainer의 width 저장

  // 카드 크기 측정
  const handleCardLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    console.log(width);
    setCardWidth(width); // 측정된 width를 상태로 저장
  };
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / cardWidth); // 동적 cardWidth 사용
    setActiveIndex(currentIndex);
  };

  const getDotColor = (dotIndex: number, activeIndex: number) => {
    if (dotIndex === activeIndex) return '#3A54AA'; 
    if (dotIndex < activeIndex) return '#79A3FF';  
    return '#AAAAAB';                              
  };
  
  return (
    <View style={styles.container}>
      <CardContainer
        colors={[
          'rgba(255, 255, 255, 0.33)',
          'rgba(255, 255, 255, 0.5)'
        ]}
        onLayout={handleCardLayout}
      >
        <View style={styles.pagination}>
          {START_SLIDE_DATA.map((_, index) => (
            <Dot
              key={index}
              dotColor={getDotColor(index, activeIndex)} // 동적으로 색상 결정
            />
          ))}
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} 
        >
          {START_SLIDE_DATA.map((item, index) => (
            <View key={index} style={{ width: cardWidth * 0.9, alignItems: 'center', justifyContent: 'center'}}>
              <SkinTypeStartCard
                title={item.title}
                description={item.description}
                image={item.image}
                index={index}
              />
            </View>
          ))}
        </ScrollView>
      </CardContainer>
    </View>
  );
};
const CardContainer = styled(LinearGradient)`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 5;
  border-width: 1px;
  border-color: white;
  flex: 1;
  padding: 16px;
  max-height: 403px;
  max-width: 328px;
`;
const Dot = styled.View<{ dotColor: string }>`
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  background-color: ${({ dotColor }) => dotColor};
  margin-horizontal: 5px;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 0,
  }
});

export default SkinTypeSlider;