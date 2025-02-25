import { ODSCard } from "./commons/ODSCard";
import { TitleComponent } from "./commons/TitleComponent";
import styled from "@emotion/native";

export const ODSAroundScreen = () => {
  return (
    <ODSAroundScreenWrapper>
      <TitleComponent />
      <ODSCard />
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
