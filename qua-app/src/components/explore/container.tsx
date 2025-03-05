import styled from "@emotion/native";
import { ScrollView, FlatList, View } from "react-native";
import { ODSCard } from "./commons/ODSCard";
import { TitleComponent } from "./commons/TitleComponent";
import { IngredientComponent } from "./RankCommons/IngredientComponent";
import { RankButtonComponent } from "./RankCommons/RankButtonComponent";
import { RankCard } from "./commons/RankCard";
import MainHeader from "../commons/MainHeader";

export const ExploreContainer = () => {
  const odsCards = [1, 2, 3, 4, 5];

  const rankCards = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <AroundScreenWrapper> 
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainHeader/>
        <TitleComponent
          mainTitle="ODS 화장대 둘러보기"
          subTitle="같은 스킨타입의 화장대를 둘러보고 인생템을 찾아보아요!"
          showButton={false}
        />

        {/* ODS 카드 가로 스크롤 */}
        <ODSViewWrapper>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {odsCards.map((item, index) => {
              return (
                <ODSCardWrapper key={index}>
                  <ODSCard />
                </ODSCardWrapper>
              );
            })}
          </ScrollView>
        </ODSViewWrapper>

        <LineView />

        <TitleComponent
          mainTitle="랭킹별로 둘러보기"
          subTitle="상위권 화장대를 둘러보고 인생템을 찾아보아요!"
          showButton={true}
        />

        <IngredientComponentWrapper>
          <IngredientComponent />
        </IngredientComponentWrapper>

        <RankButtonComponent />

        <RankCardWrapper>
          <FlatList
            data={rankCards}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <RankCard
                backgroundColor={index % 2 === 0 ? "#F4F7FF" : "#F7F7F7"}
              />
            )}
          />
        </RankCardWrapper>
      </ScrollView>
    </AroundScreenWrapper>
  );
};

const AroundScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: strech;
  width: 100%;
  height:100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ODSViewWrapper = styled.View`
  width: 100%;
  height: auto;
  margin-left: 16px;
  margin-top: 40px;
  padding-right: 16px;
`;

const ODSCardWrapper = styled.View`
  margin-right: 16px;
`;

const LineView = styled.View`
  background-color: ${({ theme }) => theme.colors.bright_grey};
  height: 0.5px;
  width: 354px;
  margin: 40px 18px;
`;

const IngredientComponentWrapper = styled.View`
  width: 100%;
`;

const RankCardWrapper = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export default ExploreContainer;
