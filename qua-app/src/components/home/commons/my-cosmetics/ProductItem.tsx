import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';

interface ProductItemProps {
  brand: string;
  name: string;
  matchLevel: string;
  imageSource: any;
}

const ProductItem: React.FC<ProductItemProps> = ({ brand, name, matchLevel, imageSource }) => {
  return (
    <Container>
      {/* 🔹 제품 이미지 */}
      <ProductImage source={imageSource} />

      {/* 🔹 제품 정보 */}
      <ProductInfo>
        <Brand>{brand}</Brand>
        <ProductName>{name}</ProductName>
        <Tag>토너</Tag>
      </ProductInfo>

      {/* 🔹 적합도 배지 */}
      <MatchContainer match={matchLevel}>
        <MatchBadge >{matchLevel}</MatchBadge>
      </MatchContainer>
    </Container>
  );
};

export default ProductItem;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 8px;
  elevation: 2;
  padding-bottom: 16px;
`;

/* 🔹 제품 이미지 */
const ProductImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 10px;
  margin-right: 8px;
`;

/* 🔹 제품 정보 */
const ProductInfo = styled.View`
  flex:1;
  flex-direction: col;
  justify-content: space-between;
  gap: 6px;
`;

/* 🔹 브랜드명 */
const Brand = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #818182;
`;

/* 🔹 제품명 */
const ProductName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #081533;
`;

/* 🔹 태그 */
const Tag = styled.Text`
  font-size: 10px;
  font-weight: 600;
  color: white;
  background-color: #3A54AA;
  padding: 4px 8px;
  border-radius: 20px;
  align-self: flex-start;
`;

const MatchContainer = styled.View<{ match: string }>`
  height: 68px;
  width: 68px;
  background-color: ${({ match }) =>
    match === '매우 적합' ? '#E5EDFF' :
    match === '적합' ? '#EBF9E7' :
    match === '보통' ? '#F8FEDC' :
    match === '부적합' ? '#FBEFE6' :
    '#FFEDF9'};
  padding: 13px 13px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;
/* 🔹 적합도 배지 */
const MatchBadge = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #081533;
  text-align: center;
  align-self: center;
`;