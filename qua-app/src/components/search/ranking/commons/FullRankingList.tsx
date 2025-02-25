import styled from "@emotion/native";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { rankingData } from "../../utils/constants";
import FullRankingItem from "./FullRankingItem";
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

const FullRankingList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('스킨 / 토너');
  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [products, setProducts] = useState<ProductData[]>([]);
  const flatListRef = useRef<FlatList>(null);
  
  useEffect(() => {
    const updatedProducts:ProductData[] = getFilteredProducts(selectedCategory, selectedFilter);
    setProducts(updatedProducts);
  }, [selectedCategory, selectedFilter]); 

  const getFilteredProducts = (category: string, filter: string) => {
    const categoryKey = categoryMap[category]; 
    const filterKey = filterMap[filter]; 

    const categoryData = rankingData.find((item) => item.type === categoryKey);
    if (!categoryData) return [];

    const skinTypeData = categoryData.skinTypeProducts.find((item) => item.skinType === filterKey);
    
    return skinTypeData ? skinTypeData.products : [];
  };


  return (
    <SectionContainer>
      <ContentContainer>
        <FlatList
          style={styles.flatCategory}
          data={Object.keys(categoryMap)}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CategoryItem onPress={() => setSelectedCategory(item)}>
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
          renderItem={({ item }) => (
            <FilterItem onPress={() => setSelectedFilter(item)}>
              <FilterText selected={selectedFilter === item}>{item}</FilterText>
            </FilterItem>
          )}
        />
        <Divider/>
        <HeaderContainer>
          <HeaderText>인기순</HeaderText>
        </HeaderContainer>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <FullRankingItem brand={item.brand} name={item.name} image={item.image} price={item.price} rank={index+1}/>
          )}
          ItemSeparatorComponent={()=><Divider/>}    
          ListFooterComponent={<FooterContainer/>}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

export default FullRankingList;

const SectionContainer = styled.View`
  margin-bottom: 20px;
  padding-horizontal: 17px;
  flex:1;
  margin-top: 20px;
`;

const styles = StyleSheet.create({
  flatCategory: {
    marginTop: 6,
    paddingTop: 10,
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
  margin-horizontal: 1px;
`

const CategoryItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-horizontal: 10px;
  padding-bottom: 10px;
`;

const CategoryText = styled.Text<{ selected: boolean }>`
  font-size: 15px;
  font-weight: ${({ selected }) => (selected ? '600' : '500')};
  color: ${({ selected }) => (selected ? '#5D85EE' : '#AAAAAB')};
  text-align: center;
  padding-bottom: 2px;
  position: relative;
`;

const CategoryIndicator = styled.View`
  position: absolute;
  top: -10px;
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
  background-color: white;
  margin-top: 14px;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 15px;
  margin-bottom: -9px;
  z-index: 100;
`
const HeaderText = styled.Text`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 500;
  color: #081533;
`

const Divider = styled.View`
  height: 0.7px;
  background-color: #5D85EE;
  width: 100%;
  margin-vertical: 1px;
`

const FooterContainer = styled.View`
  height: 90px;
  width: 100%;
`