import { TouchableOpacity, Image, View } from "react-native";
import styled from "@emotion/native";

interface RankDetailCardProps {
  backgroundColor: string;
}

export const RankDetailCard = ({ backgroundColor }: RankDetailCardProps) => {
  return (
    <RankCardWrapper style={{ backgroundColor }}>
      <LeftContainer>
        <RankNumberText>1</RankNumberText>
      </LeftContainer>
      <MainContentContainer>
        <MiddleContainer>
          <ProfileImage
            source={require("../../../../assets/around/ODS_profile.png")}
          />
          <InfoContainer>
            <TopRow>
              <NicknameText>사과</NicknameText>
              <FollowerText>팔로워 123</FollowerText>
            </TopRow>
            <BottomRow>
              <ScoreText>99점</ScoreText>
              <ScoreText>상위 1%</ScoreText>
            </BottomRow>
          </InfoContainer>
        </MiddleContainer>
        <SkinTypeContainer>
          <SkinTypeRow>
            <SkinTypeLabel>스킨</SkinTypeLabel>
            <SkinTypeLabel>앰플</SkinTypeLabel>
            <SkinTypeLabel>로션</SkinTypeLabel>
            <SkinTypeLabel>기타</SkinTypeLabel>
          </SkinTypeRow>
          <SkinTypeRow>
            <SkinTypeValue>적합</SkinTypeValue>
            <SkinTypeValue>매우적합</SkinTypeValue>
            <SkinTypeValue>적합</SkinTypeValue>
            <SkinTypeValue>매우적합</SkinTypeValue>
          </SkinTypeRow>
        </SkinTypeContainer>
      </MainContentContainer>
      <FollowButtonContainer>
        <FollowButton>
          <FollowButtonText>팔로우</FollowButtonText>
        </FollowButton>
      </FollowButtonContainer>
    </RankCardWrapper>
  );
};

const RankCardWrapper = styled.View`
  border-radius: 10px;
  overflow: hidden;
  height: 151px;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 0 18px 12px 18px;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const MainContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const MiddleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

const FollowButtonContainer = styled.View`
  align-self: flex-start;
  margin-top: 12px;
  margin-right: 12px;
`;

const RankNumberText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

const ProfileImage = styled(Image)`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  margin-right: 8px;
`;

const InfoContainer = styled.View`
  flex-direction: column;
  justify-content: center;
`;

const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NicknameText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-right: 6px;
`;

const FollowerText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  color: ${({ theme }) => theme.colors.grey};
`;

const BottomRow = styled.View`
  flex-direction: row;
  margin-top: 4px;
`;

const ScoreText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.middle_blue};
  margin-right: 6px;
`;

const FollowButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.middle_blue};
  padding: 0px 12px;
  border-radius: 15px;
  width: 61px;
  height: 22px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const FollowButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;

const SkinTypeContainer = styled.View`
  align-items: center;
  margin-top: 8px;
`;

const SkinTypeRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 4px;
  gap: 10px;
`;

const SkinTypeLabel = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  color: ${({ theme }) => theme.colors.black};
  width: 50px;
  text-align: center;
`;

const SkinTypeValue = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  color: ${({ theme }) => theme.colors.middle_blue};
  width: 50px;
  text-align: center;
  border-radius: 5px;
  background-color: #e5edff;
  padding: 2px 0;
`;
