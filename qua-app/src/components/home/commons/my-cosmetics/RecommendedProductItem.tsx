import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from '@emotion/native';

interface RecommendedProductItemProps {
  brand: string;
  name: string;
  imageSource: any;
}

const RecommendedProductItem: React.FC<RecommendedProductItemProps> = ({ brand, name, imageSource }) => {
  return (
    <>
      <Container>
        {/* 🔹 제품 이미지 */}
        <ProductImage source={imageSource} resizeMode="contain" />
        
        {/* 🔹 제품 정보 */}
        <ProductInfo>
          <Brand>{brand}</Brand>
          <ProductName>{name}</ProductName>
        </ProductInfo>
      </Container>
      
    </>
    
  );
};

export default RecommendedProductItem;

// const Container = styled.View`
//   width: 110px;
//   height: 180px;
//   background-color: white;
//   border-radius: 10px;
//   border: 1px solid #E0E0E0;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
//   padding: 10px;
// `;

const Container = styled.View`
  flex-direcotion: col;
  align-items: flex-start;
  justify-content: center;
  margin-right: 10px;
  gap:12px;
`;

/* 🔹 제품 이미지 */
const ProductImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #DBDBDB;
  align-items: center;
  justify-content: center;
  resize-mode: cover;
  padding: 10px;;
`;

/* 🔹 제품 정보 */
const ProductInfo = styled.View`
  align-items: flex-start;
  gap: 4px;
`;

const Brand = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15.6px;
  color: #818182;
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
  color: #081533;
  text-align: center;
`;