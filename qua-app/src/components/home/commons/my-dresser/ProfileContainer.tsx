import React from 'react';
import styled from '@emotion/native';

interface ProfileProps {
  userImage: any;
  userName: string; 
  follower: number;
  following: number;
}

const ProfileContainer: React.FC<ProfileProps> = ({userImage, follower, following, userName}) => {  
  return (
    <ProfileSection>
      <ProfileBox>
        <ProfileImage source={userImage} />
        <ProfileText>{userName}</ProfileText>
      </ProfileBox>
      
      <FollowInfo>
        <FollowCol>
          <FollowText>팔로워</FollowText>
          <FollowText>{follower}</FollowText>
        </FollowCol>
        <FollowCol>
          <FollowText>팔로잉</FollowText>
          <FollowText>{following}</FollowText>
        </FollowCol>
      </FollowInfo>
    </ProfileSection>
  );
};

export default ProfileContainer;

const ProfileSection = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const ProfileBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`
const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  margin-bottom: 5px;
`;

const ProfileText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #081533;
`;

const FollowInfo = styled.View`
  flex-direction: row;
  gap: 24px;
`;

const FollowCol = styled.View`
  flex-direction: col;
  align-items: center;
`
const FollowText = styled.Text`
  font-size: 14px;
  color: #AAAAAB;
  line-height: 17px;
`;
