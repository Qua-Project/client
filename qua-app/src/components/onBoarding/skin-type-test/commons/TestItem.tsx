import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Text, Animated, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { TEST_SLIDE_DATA,TestSlideDataType } from '../utils/constants';
const screenWidth = Math.round(Dimensions.get('window').width);

interface TestItemProps{
  item: TestSlideDataType;
  index: number;
}
const {width} = Dimensions.get('screen');
const TestItem:React.FC<TestItemProps> = ({item, index}) => {
  console.log(width);
  return (
    <Container width={width}>
      <Question>{item.question}</Question>
      <OptionContainer>
        {item.options.map((option, index) => (
          <Option>
            <OptionText >
              {option}
            </OptionText>
          </Option>
        ))}
      </OptionContainer>
    </Container>
  );
}

export default TestItem;

const Container = styled.View<{width: number}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Question = styled.Text`
  color: #081533;
  font-size: 18px;
  font-weight: bold;
  font-family: Pretendard;
  text-align: center;
  margin-bottom: 20px;
  margin-top: -20px;
`
const OptionText = styled.Text`
  color: '#081533';
  font-size: 12px;
  font-weight: regular;
  font-family: Pretendard;
  text-align: center;
`;
const OptionContainer = styled.View`
  flex-direction: row; 
  flex-wrap: wrap;
  width: 328px;
  padding-horizontal: 31px;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
const Option = styled.TouchableOpacity`
  backgroundColor: 'rgba(255, 255, 255, 0.7)';
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 124px;
  aspect-ratio: 1;
  borderRadius: 10px;
`;
// const OptionText = styled.Text<{selected:boolean}>`
//   color: ${({selected}) => (selected? '#FFFFFF': '#081533')};
//   font-size: 12px;
//   font-weight: regular;
//   font-family: Pretendard;
//   text-align: center;
// `;
// const Option = styled.TouchableOpacity<{selected:boolean}>`
//   backgroundColor: ${({selected}) => (selected? 'rgba(93, 133, 238, 1)': 'rgba(255, 255, 255, 0.7)')};
//   align-items: center;
//   justify-content: center;
//   width: 124px;
//   height: 124px;
//   aspect-ratio: 1;
//   borderRadius: 10px;
// `;


