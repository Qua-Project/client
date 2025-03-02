import { TouchableOpacity, Image } from "react-native";
import styled from "@emotion/native";

interface RankCardProps {
  backgroundColor: string;
}

export const RankCard = ({ backgroundColor }: RankCardProps) => {
  return (
    <RankCardWrapper style={{ backgroundColor: backgroundColor }}>
      <LeftContainer>
        <RankNumberText>1</RankNumberText>
        <ProfileImage
          source={require("../../../../assets/around/ODS_profile.png")}
        />
        <InfoContainer>
          <TopRow>
            <NicknameText>사과</NicknameText>
            <FollowerText>팔로워 123</FollowerText>
          </TopRow>
          <BottomRow>
            <ScoreText>점수 </ScoreText>
            <ScoreText>상위 3%</ScoreText>
          </BottomRow>
        </InfoContainer>
      </LeftContainer>
      <FollowButton>
        <FollowButtonText>팔로우</FollowButtonText>
      </FollowButton>
    </RankCardWrapper>
  );
};

const RankCardWrapper = styled.View`
  border-radius: 10px;
  overflow: hidden;
  height: 76px;
  flex-direction: row;
  align-items: center;
  padding: 15px 18px;
  margin: 0 18px 12px 18px;
`;

const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const RankNumberText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  width: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 19px;
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
`;

const FollowButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.middle_blue};
  padding: 0px 12px;
  border-radius: 15px;
  width: 61px;
  height: 22px;
  text-align: center;
  justify-content: center;
`;

const FollowButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
`;
