import React, { useState, useRef } from 'react';
import { ScrollView, Dimensions, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';

const { width: screenWidth } = Dimensions.get('window');

// 질문 데이터
const questions = [
  {
    id: 1,
    question: '본인이 생각하는 자신의 피부 타입을 선택해주세요.',
    options: [
      '쉽게 당기고 건조함을 느껴요',
      '피지 분비가 많고 유분이 많아요',
      '건조함과 유분이 공존해요',
      '쉽게 자극을 받아요',
    ],
  },
  {
    id: 2,
    question: '얼굴에 모공이 많고 크기가 큰가요?',
    options: [
      '그렇지 않아요',
      '얼굴의 일부에만 있어요',
      '곳곳에 도드라져 보여요',
      '전체적으로 도드라져 보여요',
    ],
  },
  {
    id: 3,
    question: '얼굴에 핏줄이 잘 보이는 편인가요?',
    options: [
      '전혀 안 보여요',
      '운동 시에만 보여요',
      '평상시에도 약간 보여요',
      '눈에 띄게 보여요',
    ],
  },
];

const SkinTeypTestSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [answers, setAnswers] = useState<Record<number, number>>({}); 
  const [cardWidth, setCardWidth] = useState(0); 
  
  const scrollRef = useRef<ScrollView>(null);

  // 답변 저장 및 다음 카드로 이동
  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));

    // 다음 카드로 이동
    if (currentIndex < questions.length - 1) {
      scrollRef.current?.scrollTo({ x: (currentIndex + 1) * cardWidth *0.9, animated: true });
      setCurrentIndex((prev) => prev + 1);
      console.log(currentIndex);
    }
  };  
  const handleCardLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    console.log(width);
    setCardWidth(width); 
  };

  return (
    <View style={styles.container}>
      <CardContainer
        colors={[
          'rgba(255, 255, 255, 0.48)',
          'rgba(255, 255, 255, 0.7)'
        ]}
        onLayout={handleCardLayout}
      >
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onMomentumScrollEnd={(e) => {
            const newIndex = Math.round(e.nativeEvent.contentOffset.x / cardWidth);
            console.log(newIndex);
            setCurrentIndex(newIndex);
          }}
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {questions.map((item, index) => (
            <View key={item.id} style={{width: cardWidth * 0.9, alignItems: 'center', justifyContent: 'center'}}>
              <SkinTypeTestCard
                question={item.question}
                options={item.options}
                selectedOptionIndex={answers[index]} 
                onSelect={(optionIndex) => handleAnswer(optionIndex)} 
              />
            </View>
          ))}
        </ScrollView>
      </CardContainer>

      <Button
        last = {currentIndex === questions.length - 1}
        onPress={() => console.log('완료! 선택된 옵션:', answers)}
      >
        <ButtonText
          last = {currentIndex === questions.length - 1}
        >완료</ButtonText>
      </Button>
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
  max-width: 328px;
`;

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
export default SkinTeypTestSlider;


