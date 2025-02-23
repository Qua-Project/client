import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';
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
  padding-vertical: 20px;
  gap: 16px;
`;

const ContentText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #0C0D0E;
`