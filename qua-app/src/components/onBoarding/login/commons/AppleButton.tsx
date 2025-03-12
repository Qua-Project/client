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