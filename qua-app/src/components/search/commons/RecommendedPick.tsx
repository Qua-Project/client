import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { recommendedPick } from "../utils/constants";
import RecommendedPickItem from "./RecommendedItem";

const categoryMap: Record<string, number> = {
  '스킨 / 토너': 1,
  '앰플 / 에센스 / 세럼': 2,
  '로션 / 에멀젼': 3,
  '크림': 4,
};


type RecommendProductData = {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: any;
  score: string;
};

const RecommendedPick: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('스킨 / 토너');
  const [products, setProducts] = useState<RecommendProductData[]>([]);

  useEffect(() => {
    const updatedProducts:RecommendProductData[] = getFilteredProducts(selectedCategory);
    setProducts(updatedProducts);
  }, [selectedCategory]);

  const getFilteredProducts = (category: string) => {
    const categoryKey = categoryMap[category];

    // 해당 카테고리 찾기
    const categoryData = recommendedPick.find((item) => item.type === categoryKey);
    if (!categoryData) return [];

    return categoryData ? categoryData.products : [];
  };
  return (
    <SectionContainer>
      <SectionTitle>OMS 타입 쿠쿠아님을 위한 추천 PICK!</SectionTitle>
      <ContentContainer>
        <FlatList
          style={styles.flatCategory}
          data={Object.keys(categoryMap)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <CategoryItem key={index} onPress={() => setSelectedCategory(item)}>
              {selectedCategory === item && <CategoryIndicator />}
              <CategoryText selected={selectedCategory === item}>{item}</CategoryText>
            </CategoryItem>
          )}
        />
        <Divider/>
        
        <Container>
          <ProductContainer>
            {products.map((item, index) => (
              <RecommendedPickItem
                key={index}
                score={item.score}
                brand={item.brand}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </ProductContainer>
        </Container>
      </ContentContainer>
    </SectionContainer>
  );
};

export default RecommendedPick;

const SectionContainer = styled.View`
  margin-bottom: 20px;
  padding-horizontal: 17px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-left: 8px;
`;

const styles = StyleSheet.create({
  flatCategory: {
    marginTop: 3,
    height: 46,
  },
  flatSkinType: {
    marginVertical: 10,
  },
  flatContainer: {
    height: 39,
  },
});

const ContentContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  margin-horizontal: 1px;
`

const CategoryItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-horizontal: 10px;
`;

const CategoryText = styled.Text<{ selected: boolean }>`
  font-size: 15px;
  font-weight: ${({ selected }) => (selected ? '600' : '500')};
  color: ${({ selected }) => (selected ? '#5D85EE' : '#AAAAAB')};
  position: relative;
`;

const CategoryIndicator = styled.View`
  position: absolute;
  top: 6px;
  width: 3px;
  height: 3px;
  background-color: #3A54AA;
  border-radius: 3px;
`;

const Divider = styled.View`
  height: 0.7px;
  background-color: #5D85EE;
  width: 100%;
  margin-vertical: 0.5px;
`

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`
const ProductContainer = styled.View`
  flex-direction: row;
`