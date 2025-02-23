import React from 'react';
import { View, Alert } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';

const AppleLoginButton:React.FC = () => {
  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log('Apple Credential:', credential);
      Alert.alert('로그인 성공!', `User: ${credential.authorizationCode}`);
    } catch (error) {
      Alert.alert(`${error}`)
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