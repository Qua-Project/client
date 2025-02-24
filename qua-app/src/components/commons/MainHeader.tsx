import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainHeader() {
  return (
    <SafeContainer>
      {/* 🔹 헤더 */}
      <Header>
        <Logo source={require('@assets/Qua.png')} />
        <HeaderButtons>
          <SkinTypeButton>
            <SkinTypeText>피부 타입</SkinTypeText>
          </SkinTypeButton>
          <NotificationIcon source={require('@assets/notification_icon.png')} />
        </HeaderButtons>
      </Header>
    </SafeContainer>
  );
}

const SafeContainer = styled(SafeAreaView)`
  background-color: transparent;
  padding: 0px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 25px;
`;

const Logo = styled.Image`
  resize-mode: contain;
  width: 60px;
  height: 30px;
`;

const HeaderButtons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SkinTypeButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 3px 12px;
  border-radius: 32px;
  border-width: 1.5px;
  border-color: #818182;
`;

const SkinTypeText = styled.Text`
  font-size: 14px;
  color: #818182;
  font-weight: 600;
`;

const NotificationIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
