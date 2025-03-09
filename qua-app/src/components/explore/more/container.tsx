import { FlatList, ScrollView } from "react-native-gesture-handler";

import styled from "@emotion/native";
import { IngredientComponent } from "@/src/components/explore/RankCommons/IngredientComponent";
import MainHeader from "@/src/components/commons/MainHeader";
import { RankButtonComponent } from "@/src/components/explore/RankCommons/RankButtonComponent";
import { RankDetailCard } from "@/src/components/explore/commons/RankDetailCard";

export const MoreContainer = () => {
  const rankCards = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <ExploreMoreWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainHeader />
        <IngredientComponentWrapper>
          <IngredientComponent />
        </IngredientComponentWrapper>
        <RankButtonComponent />
        <RankCardWrapper>
          <FlatList
            data={rankCards}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            nestedScrollEnabled={true}
            renderItem={({ item, index }) => (
              <RankCardWrapperItem>
                <RankDetailCard
                  backgroundColor={index % 2 === 0 ? "#F4F7FF" : "#F7F7F7"}
                />
              </RankCardWrapperItem>
            )}
          />
        </RankCardWrapper>
      </ScrollView>
    </ExploreMoreWrapper>
  );
};

const ExploreMoreWrapper = styled.View`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const IngredientComponentWrapper = styled.View`
  width: 100%;
`;

const RankCardWrapper = styled.View`
  width: 100%;
  margin-top: 40px;
`;

const RankCardWrapperItem = styled.View`
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  height: 151px;
`;
