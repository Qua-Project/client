import { TouchableOpacity } from "react-native";

import styled from "@emotion/native";

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImage
        source={require("../../../../assets/around/ODS_profile.png")}
      />
      <ProfileTextWrapper>
        <NicknameText>키위</NicknameText>
        <FollowerText>팔로워 55</FollowerText>
      </ProfileTextWrapper>
      <FollowButton>
        <FollowButtonText>팔로우</FollowButtonText>
      </FollowButton>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const ProfileTextWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
`;

const NicknameText = styled.Text`
  margin-left: 6px;
  font-family: ${({ theme }) => theme.fonts.family.bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

const FollowerText = styled.Text`
  margin-left: 4px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.middle_grey};
`;

const FollowButton = styled(TouchableOpacity)`
  width: 61px;
  height: 22px;
  border-radius: 15px;
  padding: 2.5px 12px;
  background-color: ${({ theme }) => theme.colors.middle_blue};
  margin-right: 7px;
`;

const FollowButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: 14px;
  color: white;
`;
