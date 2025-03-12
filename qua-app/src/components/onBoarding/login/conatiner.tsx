import React from "react";
import { View } from "react-native";
import styled from "@emotion/native";
import AppleLoginButton from "./commons/AppleButton";

const LoginContainer: React.FC = () => {
  return (
    <Container>
      <Logo source={require("@assets/Qua.png")} />
      <View style={{ height: 143, alignItems:'center'}}>
        <Title>나만의 맞춤형 화장대</Title>
        <Subtitle>
          피부 타입의 고려 유무에 따라{"\n"}같은 제품으로 다른 효과를 낼 수 있어요!{"\n"}
          쿠아와 함께 100점 화장대를 만들어 볼까요?
        </Subtitle>
      </View>
      <View style={{ marginBottom:80}}>
        <Button bgColor="#F9E007">
          <AppLogo source={require("@assets/kakao.png")}/>
          <ButtonText textColor="#282828">카카오톡으로 시작하기</ButtonText>
          <View style={{ width:25 }} />
        </Button>
        <AppleLoginButton/>
      </View>
    </Container>
  );
};

export default LoginContainer;


const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 20px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 40px;
  margin-top:120px;
  resize-mode: contain;
`;

const Title = styled.Text`
  font-size: 30px;
  line-height: 39px;
  font-weight: 700;
  color: #081533;
  margin-bottom: 32px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #818182;
  line-height: 24px;
`;

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

