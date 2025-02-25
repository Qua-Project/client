import styled from "@emotion/native";
import { useTheme } from "@emotion/react";

export const TitleComponent = () => {
  const theme = useTheme();
  return (
    <TitleComponentWrapper>
      <Title
        style={{
          color: theme.colors.black,
          fontFamily: theme.fonts.family.bold,
          fontSize: 24,
        }}
      >
        ODS 화장대 둘러보기
      </Title>
      <Title
        style={{
          color: theme.colors.grey,
          fontFamily: theme.fonts.family.regular,
          fontSize: 14,
        }}
      >
        같은 스킨타입의 화장대를 둘러보고 인생템을 찾아보아요!
      </Title>
    </TitleComponentWrapper>
  );
};

const TitleComponentWrapper = styled.View`
  padding: 18px;
  width: 100%;
  height: 50px;
`;

const Title = styled.Text`
  margin-bottom: 8px;
`;
