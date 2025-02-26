import { ODSCard } from "./commons/ODSCard";
import { TitleComponent } from "./commons/TitleComponent";
import styled from "@emotion/native";

export const ODSAroundScreen = () => {
  return (
    <ODSAroundScreenWrapper>
      <TitleComponent
        mainTitle="ODS 화장대 둘러보기"
        subTitle="같은 스킨타입의 화장대를 둘러보고 인생템을 찾아보아요!"
        showButton={false}
      />
      <ODSCard />
      <LineView />
      <TitleComponent
        mainTitle="랭킹별로 둘러보기"
        subTitle="상위권 화장대를 둘러보고 인생템을 찾아보아요!"
        showButton={true}
      />
    </ODSAroundScreenWrapper>
  );
};

const ODSAroundScreenWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const LineView = styled.View`
  background-color: ${({ theme }) => theme.colors.bright_grey};
  align-items: center;
  margin: 40px 18px;
  width: 354px;
  height: 0.5px;
`;
