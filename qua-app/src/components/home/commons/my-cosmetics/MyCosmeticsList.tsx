import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { MOCK_DATA } from '../../util/constants';
import ProductItem from './ProductItem';

interface MyCosmeticListProps {
  productData:{
    id: string;
    brand:string;
    name: string;
    matchLevel: string;
    imageSource: any;
  }[]
};

const MyCosmeticList:React.FC<MyCosmeticListProps> = ({ productData }) => {  
  return (
    <Container>
      <ContentText>내 스킨/토너</ContentText>
      <FlatList
        data={productData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductItem
            brand={item.brand}
            name={item.name}
            matchLevel={item.matchLevel}
            imageSource={item.imageSource}
          />
        )}
      />
    </Container>
  );
};

export default MyCosmeticList;

const Container = styled.View`
  align-items: flex-start;
  gap: 16px;
`;

const ContentText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #0C0D0E;
`
const ItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 8px;
  elevation: 2;
`;

const ItemText = styled.Text`
  font-size: 14px;
  color: #333;
`;

/* 🔹 매칭 배지 스타일 */
const MatchBadge = styled.Text<{ match: string }>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ match }) =>
    match === '매우 적합' ? '#658ef4' :
    match === '적합' ? '#84C686' :
    match === '보통' ? '#F2C94C' :
    match === '부적합' ? '#F2994A' :
    '#EB5757'};
  background-color: ${({ match }) =>
    match === '매우 적합' ? '#E3ECFF' :
    match === '적합' ? '#E8F5E9' :
    match === '보통' ? '#FFF8E1' :
    match === '부적합' ? '#FBE9E7' :
    '#FDEEEE'};
  padding: 5px 10px;
  border-radius: 15px;
`;



