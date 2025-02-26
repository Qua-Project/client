import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { TouchableOpacity } from "react-native";

interface TitleComponentProps {
  mainTitle: string;
  subTitle: string;
  showButton?: boolean;
}

export const TitleComponent = ({
  mainTitle,
  subTitle,
  showButton = false,
}: TitleComponentProps) => {
  const theme = useTheme();

  return (
    <TitleComponentWrapper>
      <TextWrapper>
        <Title
          style={{
            color: theme.colors.black,
            fontFamily: theme.fonts.family.bold,
            fontSize: 24,
          }}
        >
          {mainTitle}
        </Title>
        <Title
          style={{
            color: theme.colors.grey,
            fontFamily: theme.fonts.family.regular,
            fontSize: 14,
          }}
        >
          {subTitle}
        </Title>
      </TextWrapper>
      {showButton && (
        <ButtonWrapper>
          <ButtonText>전체보기&gt;</ButtonText>
        </ButtonWrapper>
      )}
    </TitleComponentWrapper>
  );
};

const TitleComponentWrapper = styled.View`
  padding: 0 18px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  margin-bottom: 8px;
`;

const ButtonWrapper = styled(TouchableOpacity)`
  margin-bottom: 29px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  color: ${({ theme }) => theme.colors.grey};
`;
