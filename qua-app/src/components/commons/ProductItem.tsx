import React from 'react';
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
      <ProductImage source={imageSource} />
      <ProductInfo>
        <Brand>{brand}</Brand>
        <ProductName>{name}</ProductName>
        <Tag>토너</Tag>
      </ProductInfo>

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

const ProductImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 10px;
  margin-right: 8px;
`;

const ProductInfo = styled.View`
  flex:1;
  flex-direction: col;
  justify-content: space-between;
  gap: 6px;
`;

const Brand = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #818182;
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #081533;
`;

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

const MatchBadge = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #081533;
  text-align: center;
  align-self: center;
`;