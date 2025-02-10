import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface KakaoButtonProps {
  onPress: () => void;
}

const KakaoButton: React.FC<KakaoButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>카카오 로그인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FEE500",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
  },
});

export default KakaoButton;
