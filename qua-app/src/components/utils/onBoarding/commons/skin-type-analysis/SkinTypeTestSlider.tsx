import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Animated } from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';

const { width: screenWidth } = Dimensions.get('window');

const questions = [
  {
    id: 1,
    question: '본인이 생각하는 자신의\n피부 타입을 선택해주세요.',
    options: [
      '쉽게 당기고\n건조함을 느껴요',
      '피지 분비가 많고\n유분이 많아요',
      '건조함과 유분이\n공존해요',
      '쉽게 자극을\n받아요',
    ],
  },
  {
    id: 2,
    question: '얼굴에 모공이 많고\n크기가 큰가요?',
    options: [
      '그렇지 않아요',
      '얼굴의 일부에만\n있어요',
      '곳곳에 도드라져\n보여요',
      '전체적으로\n도드라져 보여요',
    ],
  },
  {
    id: 3,
    question: '얼굴에 핏줄이\n잘 보이는 편인가요?',
    options: [
      '전혀 안 보여요',
      '운동 시에만\n보여요',
      '평상시에도\n약간 보여요',
      '눈에 띄게\n보여요',
    ],
  },
];

const SkinTeypTestSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const scrollX = useRef(new Animated.Value(0)).current; 
  const [answers, setAnswers] = useState<Record<number, number>>({}); 
  const [cardWidth, setCardWidth] = useState(328); 
  const [spacing, setSpacing] = useState((screenWidth - 328) / 2); 
  
  const scrollRef = useRef<ScrollView>(null);
  useEffect(() => {
    console.log('Spacing:', spacing, 'CardWidth:', cardWidth); // 값 확인용 로그
  }, [spacing, cardWidth]);

  // 답변 저장 및 다음 카드로 이동
  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));

    if (cardWidth > 0 && currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      console.log('CurrentIndex before:', currentIndex);

      console.log('Scrolling to:', nextIndex * cardWidth); // 스크롤 좌표 확인
      scrollRef.current?.scrollTo({
        x: nextIndex * cardWidth,
        animated: true,
      });
    }
  };  

  const handleCardLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setCardWidth(width); 
    const calculatedSpacing = (screenWidth - width) / 2;
    setSpacing(calculatedSpacing);
    console.log('Card Width:', width, 'Spacing:', calculatedSpacing);
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: spacing }} // 동적으로 계산된 spacing 적용
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      >
        {questions.map((item, index) => {
          const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            (index + 1) * cardWidth,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9], // 양옆(0.9), 중앙(1)
            extrapolate: 'clamp',
          });

          return (
            <AnimatedCardContainer
              key={item.id}
              colors={[
                'rgba(255, 255, 255, 0.48)',
                'rgba(255, 255, 255, 0.7)',
              ]}
              onLayout={handleCardLayout} // 카드 크기 계산
              style={{
                transform: [{ scale }], // 크기 애니메이션 적용
              }}
            >
              <SkinTypeTestCard
                question={item.question}
                options={item.options}
                selectedOptionIndex={answers[index]}
                onSelect={(optionIndex) => handleAnswer(optionIndex)}
              />
            </AnimatedCardContainer>
          );
        })}
      </Animated.ScrollView>

      {/* <Button
        last = {currentIndex === questions.length - 1}
        onPress={() => console.log('완료! 선택된 옵션:', answers)}
      >
        <ButtonText
          last = {currentIndex === questions.length - 1}
        >완료</ButtonText>
      </Button> */}
    </View>
  );
};
const AnimatedCardContainer = Animated.createAnimatedComponent(styled(LinearGradient)`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  elevation: 5;
  border-width: 1px;
  border-color: white;
  flex: 1;
  padding: 16px;
  margin-bottom: 20px;
  height: 413px;
  width: 328px;
`);

const Button = styled.TouchableOpacity<{last: boolean}>`
  background-color: ${({last}) => (last? 'white': 'transparent')};
  padding-vertical: 8px;
  padding-horizontal: 60px;
  border-radius: 28px;
  margin-top: 30px;
  height: 43px;
  justify-content: center;
`

const ButtonText = styled.Text<{last: boolean}>`
  color: ${({last}) => (last? '#081533': 'transparent')};
  font-size: 16px;
  font-weight: bold;
  font-family: Pretendard;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SkinTeypTestSlider;


