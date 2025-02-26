import { ODSCard } from "./commons/ODSCard";
import { TitleComponent } from "./commons/TitleComponent";
import styled from "@emotion/native";

export const ODSAroundScreen = () => {
  return (
    <ODSAroundScreenWrapper>
      <TitleComponent />
      <ODSCard />
      <LineView />
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
  background-color: ${({ theme }) => theme.colors.grey};
  align-items: center;
  margin: 40px 18px;
  width: 354px;
  height: 0.5px;
`;
