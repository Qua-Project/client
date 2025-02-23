import React from 'react';
import { FlatList } from 'react-native';
import RecommendedProductItem from './RecommendedProductItem';
import styled from '@emotion/native';

// ✅ 샘플 데이터
const recommendedProducts = [
  {
    brand: '넘버즈인',
    name: '진정 맑게 닦은 청초토너',
    imageSource: require('@assets/home/cosmetics/recommend_1.png'),
  },
  {
    brand: '라로슈포제',
    name: '이페클라 H 토너',
    imageSource: require('@assets/home/cosmetics/recommend_2.png'),
  },
  {
    brand: '브링그린',
    name: '티트리 토너',
    imageSource: require('@assets/home/cosmetics/recommend_3.png'),
  },
];

const RecommendedProductList = () => {
  return (
    <Container>
      <Title>스킨/토너 추천</Title>
      <Subtitle>상위권 ODS 타입이 사용하는 제품이에요 !</Subtitle>
      
      <FlatList
        data={recommendedProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RecommendedProductItem
            brand={item.brand}
            name={item.name}
            imageSource={item.imageSource}
          />
        )}
        horizontal // ✅ 가로 스크롤
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 10 }}
      />
    </Container>
  );
};

export default RecommendedProductList;

const Container = styled.View`
  align-items: flex-start;
  padding-vertical: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20.8px;
  color: #081533;
  margin-bottom: 4px;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  color: #5D85EE;
  margin-bottom: 16px;
`;