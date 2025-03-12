import React from 'react';
import { View, Alert } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import API from '../../../../shared/configs/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserStore } from '../../../../shared/hooks/stores/user';
import { useNavigation } from '@react-navigation/native';
import { UserRscService } from '../../../../shared/hooks/services/UserService';
import axios from 'axios';
import { BASEURL } from '../../../../shared';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '@/src/types/type';
import { useAuthStore } from '@/src/shared/hooks/stores/auth';
import styled from '@emotion/native';

const AppleLoginButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'Nickname'>>(); 
  const { setLoggedIn } = useAuthStore();
  const {getUserInfo} = UserRscService();
  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      const response = await axios.create({
        baseURL: BASEURL,
        headers: {
          'Content-Type': 'application/json',
        },
      }).get('api/user/login/apple', { params: { code: credential.identityToken }})
  
      const accessToken = response.headers.authorization.split('Bearer ')[1];

      await setLoggedIn(accessToken); 
      //await AsyncStorage.setItem('accessToken', accessToken);
      const userInfo = await getUserInfo();
      console.log(userInfo);
      
      navigation.navigate('Nickname');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button bgColor="#000" onPress={handleAppleLogin}>
      <AppLogo source={require("@assets/apple.png")}/>
      <ButtonText textColor="#fff">Apple로 시작하기</ButtonText>
      <View style={{ width:25 }} />
    </Button>
  );
};

export default AppleLoginButton;

const AppLogo = styled.Image`
  width: 20px;
  resize-mode: contain;
`;

const Button = styled.TouchableOpacity<{ bgColor: string; borderColor?: string }>`
  position: relative;
  flex-direction: row;
  width: 90%;
  padding-horizontal: 15px;
  padding-vertical: 12px;
  border-radius: 10px;
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  border-width: ${({ borderColor }) => (borderColor ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor || "transparent"};
`;

const ButtonText = styled.Text<{ textColor: string }>`
  font-size: 16px;
  font-weight: 600;
  line-height: 24.5px;
  color: ${({ textColor }) => textColor};
`;
