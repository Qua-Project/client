import styled from "@emotion/native";
import { Image } from "react-native";

interface ValueContainerProps {
  searchResult: { img: any; name: string; brand: string; type: string }[];
  onAdd: (item: {
    img: any;
    name: string;
    brand: string;
    type: string;
  }) => void;
}

const ValueContainer:React.FC<ValueContainerProps> = ({
  searchResult,
  onAdd,
}: ValueContainerProps) => {
  return (
    <Container>
      {searchResult.length > 0 ? (
        searchResult.map((item, index) => (
          <ValueCard key={index}>
            <CardImage source={item.img} />
            <TextContainer>
              <ProductBrand>{item.brand}</ProductBrand>
              <ProductName>{item.name}</ProductName>
              <ProductType>{item.type}</ProductType>
            </TextContainer>
            <PlusBtn onPress={() => onAdd(item)}>
              <Image
                source={require("@assets/home/add/plusBtn.png")}
                style={{ width: 36, height: 36 }}
              />
            </PlusBtn>
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
  padding: 20px;
`;

const ValueCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: #e5edff;
  height: 105px;
`;

const CardImage = styled.Image`
  width: 77px;
  height: 77px;
  border-radius: 10px;
  margin-right: 10px;
`;

const TextContainer = styled.View`
  flex-direction: column;
  width: 60%;
`;

const ProductBrand = styled.Text`
  font-family: "pretendard";
  font-size: 12px;
  color: #818182;
`;

const ProductName = styled.Text`
  font-family: "pretendard";
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const ProductType = styled.Text`
  font-family: "pretendard";
  font-size: 12px;
  background-color: #3a54aa;
  color: white;
  text-align: center;
  border-radius: 20px;
  width: 35px;
  padding: 3px;
`;

const NoResultText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #aaa;
  margin-top: 20px;
`;

const PlusBtn = styled.Pressable``;
