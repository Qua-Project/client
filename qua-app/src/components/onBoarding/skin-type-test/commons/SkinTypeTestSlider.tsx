import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Animated, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { TEST_SLIDE_DATA } from '../utils/constants';
const screenWidth = Math.round(Dimensions.get('window').width);

const gap = 6;
const pageWidth = 328;
const offset = (screenWidth - pageWidth - gap) / 2;

const SkinTeypTestSlider:React.FC = () => {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const flatListRef = useRef<FlatList>(null);

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [page]: optionIndex,
    }));
    if (page < TEST_SLIDE_DATA.length - 1) {
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
        data={TEST_SLIDE_DATA}
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

const Container = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const AnimatedCardContainer = styled(LinearGradient)`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: white;
  flex: 1;
  height: 413px;
  width: 328px;
  margin-horizontal: 6px;
`;

export default SkinTeypTestSlider;


