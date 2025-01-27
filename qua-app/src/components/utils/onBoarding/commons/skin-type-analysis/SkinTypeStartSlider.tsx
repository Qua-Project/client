import React, { useRef, useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Text } from 'react-native';
import SkinTypeStartCard from './SkinTypeStartCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';

const { width: screenWidth } = Dimensions.get('window');

// 슬라이더 데이터
const slides = [
  {
    title: '나는 어떤 피부 유형일까?',
    description: '나에게 맞는 스킨케어를 찾으려면\n피부 유형부터 파악해야 해요',
    image: require('../../../../../assets/onBoarding/magnifier.png')
  },
  {
    title: '쿠아만의 8가지 피부 타입',
    description: '쿠아만의 피부 타입 분석 테스트를\n통해 나의 피부 타입을 확인하세요!',
    image: require('../../../../../assets/onBoarding/bubble.png')
  },
  {
    title: '나만의 피부 타입 분석 리포트',
    description: '쿠아가 분석해주는 피부 리포트를 통해\n더욱 빛나는 스킨케어 루틴을 만들어요',
    image: require('../../../../../assets/onBoarding/report.png')
  },
];

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
          {slides.map((_, index) => (
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
          {slides.map((item, index) => (
            <View key={index} style={{ width: cardWidth * 0.9, alignItems: 'center', justifyContent: 'center'}}>
              <SkinTypeStartCard
                title={item.title}
                description={item.description}
                image={item.image}
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
  margin-bottom: 20px;
  max-height: 403px;
  max-sidth: 328px;
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
  // dot: {
  //   width: 5,
  //   height: 5,
  //   borderRadius: 4,
  //   backgroundColor: '#AAAAAB',
  //   marginHorizontal: 8,
  // },
  // activeDot: {
  //   backgroundColor: '#3A54AA',
  // },
});

export default SkinTypeSlider;