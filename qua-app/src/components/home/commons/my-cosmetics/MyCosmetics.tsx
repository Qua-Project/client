import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { MOCK_DATA } from '../../util/constants';
import MyCosmeticList from './MyCosmeticsList';
import CosmeticFitness from './CosmeticFitness';
import RecommendedProductList from './RecommendedProductList';

interface MyDresserProps {
  headerHeight: number; 
}
const TABS = ['스킨', '앰플', '로션', '기타']; 

const MyCosmetics = () => {  
  const [selectedTab, setSelectedTab] = useState<'스킨' | '앰플' | '로션' | '기타'>('스킨');
  const data = [
    {id:'fit', content: <CosmeticFitness
      matchLevel="매우 적합"
      matchData={[
        { label: '보습', value: 0.5 },
        { label: '진정', value: 0.7 },
        { label: '트러블 케어', value: 0.9 },
        { label: '피지 조절', value: 0.6 },
      ]}
    />},
    {id: 'my', content: <MyCosmeticList productData={MOCK_DATA[selectedTab]}/>},
    {id: 'recommend', content: <RecommendedProductList />},
  ]
  return (
    <Container>
      <TabContainer>
        {TABS.map((tab) => (
          <TabButton key={tab} active={selectedTab === tab} onPress={() => setSelectedTab(tab)}>
            <TabText active={selectedTab === tab}>{tab}</TabText>
          </TabButton>
        ))}
      </TabContainer>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          item.content
        )}
        contentContainerStyle={{ paddingBottom: 20 }} 
        ItemSeparatorComponent={() => <Divider />}
      />
    </Container>
    
  );
};

export default MyCosmetics;


const Divider = styled.View`
  height: 15px;
  background-color: #F7F7F7;
  width: 100%;
  padding-horizontal: -25px;
`;


const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const TabContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 28px;
  gap: 16px;
`;

const TabButton = styled.TouchableOpacity<{ active: boolean }>`
  padding: 6px 24px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ active }) => (active ? '#5D85EE' : '#AAAAAB')};
  background-color: ${({ active }) => (active ? '#E5EDFF' : '#FFFFFF')};
`;

const TabText = styled.Text<{ active: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ active }) => (active ? '#5D85EE' : '#AAAAAB')};
`;
