import React, { useState, useRef } from 'react';
import {Dimensions, FlatList} from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import styled from '@emotion/native';
import { TEST_SLIDE_DATA } from '../utils/constants';
import TestItem from './TestItem';
import { calculateSkinType } from '../utils/calculateSkinType';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type'; 
import { useNavigation } from '@react-navigation/native';
import { SkinTypeRscService } from '@/src/shared/hooks/services/SkinTypeServices';
import { useSkinTypeStore } from '@/src/shared/hooks/stores/skin-type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const TestSlider:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'SkinTypeTest'>>();
  const scrollX = useSharedValue(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [currentPage, setCurrentPage] = useState(0); 
  const flatListRef = useRef<FlatList>(null); 
  const {setMingamScore, setSkinConcern, setSkinType, setSubunScore, setUbunScore} = useSkinTypeStore();
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    }
  });
  const handleButtonClick = async () => {
    const skinTypeResult:SkinType.SkinTypeDto = calculateSkinType(selectedOptions);
    const storageSkinType = await AsyncStorage.getItem('skinTypeResult');
    
    if ( storageSkinType == null){
      const type = await SkinTypeRscService().createTypeInfo(skinTypeResult);
      console.log(type);
    }else{
      const type = await SkinTypeRscService().updateTypeInfo(skinTypeResult);
      console.log(type);
    }
    
    const skinType = skinTypeResult.skinType;
    
    setMingamScore(skinTypeResult.mingamScore);
    setSkinConcern(skinTypeResult.skinConcern);
    setSkinType(skinTypeResult.skinType);
    setSubunScore(skinTypeResult.subunScore);
    setUbunScore(skinTypeResult.ubunScore);
    
    await AsyncStorage.setItem('skinTypeResult', skinTypeResult.skinType);
    navigation.navigate('SkinTypeResult', { skinType }); 
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex + 1, 
    }));
    
    if (currentPage < TEST_SLIDE_DATA.length) {
      
      setCurrentPage(questionId + 1);
      flatListRef.current?.scrollToOffset({
        offset: questionId * width, 
        animated: true, 
      });
      
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
              index={item.id} 
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


