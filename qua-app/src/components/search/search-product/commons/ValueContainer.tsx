import styled from "@emotion/native";
import { useState } from "react";
import { Image } from "react-native";
import SortFilterModal from "./SortFilterModal";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProductDetail, RootParamList } from "@/src/types/type";
import { useNavigation } from "@react-navigation/native";

interface ValueContainerProps {
  searchResult: ProductDetail[];
}

const ValueContainer:React.FC<ValueContainerProps> = ({
  searchResult
}: ValueContainerProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("인기순");

  const toggleModal = () => setModalVisible(!isModalVisible);
  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setModalVisible(false); // ✅ 필터 선택 후 모달 닫기
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'SearchProduct'>>(); 
  
  return (
    <Container>
      <FilterContainer onPress={toggleModal}>
        <FilterText>인기순 ▼</FilterText>
      </FilterContainer>
      {searchResult.length > 0 ? (
        searchResult.map((item, index) => (
          <ValueCard key={index} onPress={() => {navigation.push("ProductDetail", {productDetail:item})}}>
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
      <SortFilterModal isVisible={isModalVisible} onClose={toggleModal} selectedFilter={selectedFilter} onSelectFilter={handleSelectFilter} />
    </Container>
  );
}
export default ValueContainer;

const Container = styled.View`
  padding-horizontal: 20px;
`;

const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const FilterContainer = styled.TouchableOpacity`
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

const ValueCard = styled.TouchableOpacity`
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
  resize-mode: contain;
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

