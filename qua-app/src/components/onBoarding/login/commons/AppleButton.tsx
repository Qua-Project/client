import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import API from '../../../../shared/configs/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUserStore } from '../../../../shared/hooks/stores/user';
import { LoginScreenNavigationProp } from '../../../../types/type';
import { useNavigation } from '@react-navigation/native';
import { UserRscService } from '../../../../shared/hooks/services/UserService';
import axios from 'axios';
import { BASEURL } from '../../../../shared';

const AppleLoginButton = () => {
  const { setLoggedIn, setUserInfo } = useUserStore();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {getUserInfo} = UserRscService();
  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log('Apple Credential:', credential);
      
      console.log(BASEURL);

      const response = await axios.create({
        baseURL: BASEURL,
        headers: {
          'Content-Type': 'application/json',
        },
      }).get('api/user/login/apple', { params: { code: credential.identityToken }})
  
      console.log(response.headers);
      const accessToken = response.headers.authorization.split('Bearer ')[1];

      await AsyncStorage.setItem('accessToken', accessToken);
      console.log('✅ 로그인 성공! 저장된 토큰:', accessToken);
      const userInfo = await getUserInfo();
      console.log(userInfo);
      setUserInfo(userInfo);
      setLoggedIn(true);
      navigation.navigate('SkinTypeStart');
      // console.log('Apple Credential:', credential);
      // Alert.alert('로그인 성공!', `User: ${credential.identityToken}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={{ width: 200, height: 44 }}
        onPress={handleAppleLogin}
      />
    </View>
  );
};

export default AppleLoginButton;