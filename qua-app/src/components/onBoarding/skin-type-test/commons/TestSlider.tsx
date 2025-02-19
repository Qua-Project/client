import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Dimensions, View, StyleSheet, Animated, FlatList} from 'react-native';
import SkinTypeTestCard from './SkinTypeTestCard';
import { LinearGradient } from 'expo-linear-gradient';
import styled from '@emotion/native';
import { TEST_SLIDE_DATA } from '../utils/constants';
const screenWidth = Math.round(Dimensions.get('window').width);
import TestItem from './TestItem';

const TestSlider:React.FC = () => {

  return (
    <View>
      <FlatList 
        data={TEST_SLIDE_DATA} 
        renderItem={({item, index})=> (
          <TestItem item={item} index={index}/>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}


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
export default TestSlider;


