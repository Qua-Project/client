import styled from "@emotion/native";
import React from "react";
import { FlatList } from "react-native";
import { rankingData } from "../utils/constants";
import RankingItem from "./RankingItem";

const RankingList: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>랭킹</SectionTitle>
      <FlatList
        data={rankingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RankingItem brand={item.brand} name={item.name} image={item.image} price={item.price} rank={item.rank}/>
        )}
      />
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