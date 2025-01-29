import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Animated, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';

const screenWidth = Math.round(Dimensions.get('window').width);
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

const gap = 6;
const pageWidth = 328;
const offset = (screenWidth - pageWidth - gap) / 2;

const Container = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const SkinTeypTestSlider:React.FC = () => {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const flatListRef = useRef<FlatList>(null);

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [page]: optionIndex,
    }));
    if (page < questions.length - 1) {
      const nextPage = page + 1;
      setPage(nextPage);

      flatListRef.current?.scrollToOffset({
        offset: nextPage * (pageWidth + gap), // 다음 카드 위치로 이동
        animated: true,
      });
    }
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
    console.log(page)
  };

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset,
        }}
        data={questions}
        decelerationRate="normal"
        horizontal
        keyExtractor={(item: any) => `page__${item.id}`}
        onScroll={onScroll}
        pagingEnabled
        snapToInterval={pageWidth + gap * 2}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <AnimatedCardContainer
            colors={[
              'rgba(255, 255, 255, 0.48)',
              'rgba(255, 255, 255, 0.7)',
            ]}
          >
            <SkinTypeTestCard
              // style={{width: pageWidth, marginHorizontal: gap/2}}
              question={item.question}
              options={item.options}
              selectedOptionIndex={answers[index]}
              onSelect={(optionIndex) => handleAnswer(optionIndex)}
            />
          </AnimatedCardContainer>
        )}
      />
    </Container>
  );
}


const AnimatedCardContainer = styled(LinearGradient)<{gap: number}>`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 413px;
  width: 328px;
  margin-horizontal: 6px;
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SkinTeypTestSlider;


