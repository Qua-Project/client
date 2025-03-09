import styled from "@emotion/native";
import { Image } from "react-native";

interface ValueContainerProps {
  searchResult: { image: any; name: string; brand: string; type: string, price: string }[];
}

const ValueContainer:React.FC<ValueContainerProps> = ({
  searchResult,
}: ValueContainerProps) => {
  return (
    <Container>
      <FilterContainer>
        <FilterText>인기순 ▼</FilterText>
      </FilterContainer>
      {searchResult.length > 0 ? (
        searchResult.map((item, index) => (
          <ValueCard key={index}>
            <CardImage source={item.image} />
            <TextContainer>
              <ProductBrand>{item.brand}</ProductBrand>
              <ProductName>{item.name}</ProductName>
              <LastTextContainer>
                <ProductType>{item.type}</ProductType>
                <ProductPrice>{item.price}</ProductPrice>
              </LastTextContainer>
            </TextContainer>
          </ValueCard>
        ))
      ) : (
        <NoResultText>검색 결과가 없습니다.</NoResultText>
      )}
    </Container>
  );
}
export default ValueContainer;

const Container = styled.View`
  padding-horizontal: 20px;
`;

const FilterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-vertical: 20px;

`

const FilterText = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: Pretendard;
`

const ValueCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-vertical: 14px;
  padding-horizontal: 17px;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: #E5EDFF;
  height: 105px;
`;

const CardImage = styled.Image`
  width: 77px;
  height: 77px;
  border-radius: 10px;
  margin-right: 15px;
`;

const TextContainer = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-vertical: 5px;
`;

const ProductBrand = styled.Text`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: medium;
  color: #818182;
`;

const ProductName = styled.Text`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #3A54AA;
`

const LastTextContainer = styled.View`
  flex-direction: row;
  gap: 13px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`
const ProductType = styled.Text`
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 600;
  background-color: #3a54aa;
  color: white;
  line-height: 16px;
  text-align: center;
  border-radius: 20px;
  padding-horizontal: 8px;
  padding-vertical: 2px;
`;

const NoResultText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #aaa;
  margin-top: 20px;
`;

const PlusBtn = styled.Pressable``;
