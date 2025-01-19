import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useUserStore } from "../../../../hooks/stores/user";

export default function HomeScreen() {
  const { accessToken, userInfo, setAccessToken, setUserInfo } = useUserStore();

  const handleLogout = () => {
    setAccessToken(null); 
    setUserInfo(null);
  };

  return (
    <View style={styles.container}>
      {accessToken ? (
        <>
          <Text>환영합니다, {userInfo?.nickname || "사용자"}님!</Text>
          <Button title="로그아웃" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text>로그인이 필요합니다.</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
