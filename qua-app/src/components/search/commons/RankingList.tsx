import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { rankingData } from "../utils/constants";
import RankingItem from "./RankingItem";

const categoryMap: Record<string, number> = {
  '스킨 / 토너': 1,
  '앰플 / 에센스 / 세럼': 2,
  '로션 / 에멀젼': 3,
  '크림': 4,
};

const filterMap: Record<string, string | null> = {
  '전체': null,
  'OMR': 'OMR',
  'AMS': 'AMS',
  'ODS': 'ODS',
  'ODR': 'ODR',
  'ADR': 'ADR',
  'OMS': 'OMS',
  'ADS': 'ADS',
  'AMR': 'AMR',
};

type ProductData = {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: any;
};

interface RankingListProps{
  handleFull: () => void;
}

const RankingList: React.FC<RankingListProps> = ({handleFull}) => {
  const [selectedCategory, setSelectedCategory] = useState('스킨 / 토너');
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const updatedProducts:ProductData[] = getFilteredProducts(selectedCategory, selectedFilter);
    setProducts(updatedProducts);
  }, [selectedCategory, selectedFilter]); // ✅ 카테고리 or 필터 변경 시 실행

  const getFilteredProducts = (category: string, filter: string) => {
    const categoryKey = categoryMap[category]; // 카테고리 매핑
    const filterKey = filterMap[filter]; // 필터 매핑

    // 해당 카테고리 찾기
    const categoryData = rankingData.find((item) => item.type === categoryKey);
    if (!categoryData) return [];

    // 해당 스킨 타입의 제품 리스트 찾기
    const skinTypeData = categoryData.skinTypeProducts.find((item) => item.skinType === filterKey);
    
    return skinTypeData ? skinTypeData.products : [];
  };


  return (
    <SectionContainer>
      <SectionTitle>랭킹</SectionTitle>
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
        <FlatList
          style={styles.flatSkinType}
          data={Object.keys(filterMap)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <FilterItem key={index} onPress={() => setSelectedFilter(item)}>
              <FilterText selected={selectedFilter === item}>{item}</FilterText>
            </FilterItem>
          )}
        />
        <Divider/>
        <FlatList
          ListHeaderComponent={
            <HeaderContainer>
              <HeaderText>인기순</HeaderText>
            </HeaderContainer>
          }
          ListFooterComponent={
            <FooterContainer onPress={handleFull}>
              <FooterText>전체보기 {'>'}</FooterText>
            </FooterContainer>
          }
          data={products.slice(0,3)}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <RankingItem key={index} brand={item.brand} name={item.name} image={item.image} price={item.price} rank={index+1}/>
          )}
          ItemSeparatorComponent={()=><Divider/>}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

export default RankingList;

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

const FilterItem = styled.TouchableOpacity`
  padding-right: 16px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`
const FilterText = styled.Text<{ selected: boolean }>`
  font-size: 15px;
  font-weight: ${({ selected }) => (selected ? '600' : '500')};
  color: ${({ selected }) => (selected ? '#5D85EE' : '#AAAAAB')};
`;
const HeaderContainer = styled.View`
  width: 100%;
  margin-top: 14px;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
  margin-bottom: -9px;
`
const HeaderText = styled.Text`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: #081533;
`
const FooterContainer = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
`
const FooterText = styled.Text`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: #AAAAAB;
`

const Divider = styled.View`
  height: 0.7px;
  background-color: #5D85EE;
  width: 100%;
  margin-vertical: 0.5px;
`