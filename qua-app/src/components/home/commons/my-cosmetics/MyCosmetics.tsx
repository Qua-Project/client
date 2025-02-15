import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from '@emotion/native';
import { MOCK_DATA } from '../../util/constants';
import MyCosmeticList from './MyCosmeticsList';
import CosmeticFitness from './CosmeticFitness';

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
    {id: 'recommend', content: <MyCosmeticList productData={MOCK_DATA[selectedTab]}/>},
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


const Section = styled.View`
  margin-top: 16px;
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubText = styled.Text`
  font-size: 12px;
  color: #666;
`;

/* 🔹 적합도 바 */
const MatchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fb;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const MatchBars = styled.View`
  flex: 1;
`;

const MatchRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const MatchLabel = styled.Text`
  font-size: 12px;
  width: 60px;
`;

const MatchBar = styled.View<{ progress: number }>`
  flex: 1;
  height: 5px;
  border-radius: 5px;
  background-color: #e0e0e0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: ${({ progress }) => progress * 100}%;
    height: 100%;
    background-color: #658ef4;
  }
`;

/* 🔹 적합도 배지 스타일 */
const MatchBadge = styled.Text<{ match: string }>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ match }) =>
    match === '매우 적합' ? '#658ef4' :
    match === '적합' ? '#84C686' :
    match === '보통' ? '#F2C94C' :
    match === '부적합' ? '#F2994A' :
    '#EB5757'};
  background-color: ${({ match }) =>
    match === '매우 적합' ? '#E3ECFF' :
    match === '적합' ? '#E8F5E9' :
    match === '보통' ? '#FFF8E1' :
    match === '부적합' ? '#FBE9E7' :
    '#FDEEEE'};
  padding: 5px 10px;
  border-radius: 15px;
  text-align: center;
  min-width: 60px;
  align-self: flex-start;
`;


/* 🔹 추천 리스트 */
const RecommendedItem = styled.View`
  align-items: center;
  margin-right: 15px;
  width: 80px;
`;

const ProductName = styled.Text`
  font-size: 12px;
  margin-top: 5px;
`;