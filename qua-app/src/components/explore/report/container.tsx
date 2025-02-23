import ScrollContainer from "../../commons/ui/scrollContainer";
import BackButton from "../../commons/ui/backButton";
import { Image } from "react-native";
import styled from "@emotion/native";

export default function ReportContainer() {
  return (
    <ScrollContainer>
      <BackButton />
      <CenterContainer>
        <Image
          source={require("./images/productImg.png")}
          style={{ width: 344, height: 92, marginTop: 20 }}
        />
        <Title>적합도 분석 리포트</Title>
        <Image
          source={require("./images/graph.png")}
          style={{ width: 283, height: 141 }}
        />
        <Image
          source={require("./images/description.png")}
          style={{ width: 344, height: 168, marginTop: 30 }}
        />
        <Image
          source={require("./images/description2.png")}
          style={{ width: 344, height: 707, marginTop: 30 }}
        />
      </CenterContainer>
    </ScrollContainer>
  );
}

const CenterContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Title = styled.Text`
  font-family: "pretendard";
  font-weight: 600;
  font-size: 24px;
  margin: 30px 0;
`;
