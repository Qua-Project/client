import { Image, Pressable } from "react-native";
import BackButton from "../../commons/ui/backButton";
import ScrollContainer from "../../commons/ui/scrollContainer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import styled from "@emotion/native";

// 네비게이션 스택 타입 정의
type RootStackParamList = {
  main: undefined;
  report: { productId: string };
};

// 네비게이션 타입
type NavigationProps = StackNavigationProp<RootStackParamList, "main">;

// Product 인터페이스 정의
interface Product {
  productName: string;
  productImage: string;
  productPrice: number;
  brandName: string;
  categoryName: string;
}

export default function DetailContainer({ route }: any) {
  const { productId } = route.params; // 전달받은 productId
  const navigation = useNavigation<NavigationProps>();

  return (
    <ScrollContainer>
      <BackButton />
      <ImgContainer>
        <Img source={require("./images/productImg.png")} />
      </ImgContainer>
      <InfoContainer>
        <Brand>라운드랩 {">"}</Brand>
        <Name>소나무 진정 시가 토너</Name>
        <Price>정가 23,000원</Price>
      </InfoContainer>

      <Title2>적합도 분석 리포트</Title2>

      <ImgContainer>
        <Pressable
          onPress={() => {
            navigation.navigate("report", { productId: "12345" }); // 예시 productId
          }}
        >
          <ReportImg
            source={require("./images/reportBtn.png")}
            style={{ width: 344, height: 219, borderRadius: 20 }}
          />
        </Pressable>
      </ImgContainer>
      <DetailImgContainer>
        <Title2>화장품 상세 페이지</Title2>
      </DetailImgContainer>
      <ImgContainer>
        <Image
          source={require("./images/detailImg.png")}
          style={{ width: 376, height: 6726 }}
        />
      </ImgContainer>
    </ScrollContainer>
  );
}

const ImgContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Img = styled.Image`
  width: 333px;
  height: 338px;
`;

const InfoContainer = styled.View`
  margin: 0 20px;
  padding: 30px 0;
  border-bottom-width: 1px;
  border-bottom-color: #aaaaab;
`;

const Brand = styled.Text`
  font-family: "pretendard";
  color: #959595;
`;

const Name = styled.Text`
  font-family: "pretendard";
  font-size: 30px;
  font-weight: 600;
  margin: 5px 0;
`;

const Price = styled.Text`
  font-family: "pretendard";
  color: #5d85ee;
  font-size: 20px;
`;

const ReportImg = styled.Image``;

const Title2 = styled.Text`
  margin: 20px 20px 0;
  font-family: "pretendard";
  font-weight: bold;
  font-size: 20px;
`;

const DetailImgContainer = styled.View`
  border-top-width: 1px;
  border-top-color: #aaaaab;
  margin-top: 30;
`;
