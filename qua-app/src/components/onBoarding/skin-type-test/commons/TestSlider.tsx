import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedScrollHandler, useSharedValue, runOnJS} from "react-native-reanimated";
import styled from '@emotion/native';
import { TEST_SLIDE_DATA } from '../utils/constants';
import TestItem from './TestItem';
import { calculateSkinType } from '../utils/calculateSkinType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type'; 
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const TestSlider:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'SkinTypeTest'>>();
  const scrollX = useSharedValue(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [currentPage, setCurrentPage] = useState(0); 
  const flatListRef = useRef<FlatList>(null); 
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    }
  });
  const handleButtonClick = () => {
    const skinType = calculateSkinType(selectedOptions);
    console.log(skinType); 
    navigation.navigate('SkinTypeResult', {skinType}); 
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex + 1, 
    }));
    console.log('ques' + questionId);
    if (currentPage < TEST_SLIDE_DATA.length) {
      
      setCurrentPage(questionId + 1);
      flatListRef.current?.scrollToOffset({
        offset: questionId * width, // ✅ 다음 페이지 위치로 이동
        animated: true, // ✅ 부드러운 스크롤
      });
      console.log('curr'+currentPage);
    }
  };

  return (
    <>
      <Container>
        <Animated.FlatList 
          ref={flatListRef} 
          data={TEST_SLIDE_DATA} 
          renderItem={({item, index})=> (
            <TestItem 
              item={item} 
              index={index} 
              scrollX={scrollX}
              selectedOptions={selectedOptions}
              onSelectOption={handleOptionSelect} 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
        />
      </Container>
      {(currentPage == 11) && 
        <Button onPress={handleButtonClick}>
          <ButtonText>완료</ButtonText>
        </Button>
      }
    </>
  );
}
const Container = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  padding-vertical: 8px;
  padding-horizontal: 60px;
  border-radius: 28px;
  margin-top: 30px;
  height: 43px;
`

const ButtonText = styled.Text`
  color: #081533;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`
export default TestSlider;


