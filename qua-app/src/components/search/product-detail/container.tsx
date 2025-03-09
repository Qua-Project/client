import { useEffect, useState } from "react";
import styled from "@emotion/native";
import BackButton from "@/src/components/commons/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FlatList, Image, Keyboard, TouchableWithoutFeedback, StyleSheet, ScrollView} from "react-native";
import { ProductDetail, RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from 'react-native';
 
// 화면 너비, 높이 구하는 방법
const windowWidth = Dimensions.get('window').width;
interface ProductDetailContainerProps{
  productDetail: ProductDetail;
}

const ProductDetailContainer:React.FC<ProductDetailContainerProps> = ({productDetail}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'ProductDetail'>>(); 

  return (
    <Container>
      <BackButton/>
      <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 28.5 }}  showsVerticalScrollIndicator={false}>
        <ProductImage source={productDetail.image} width={windowWidth}/>

        <ProductInfo>
          <BrandText>{productDetail.brand} {">"}</BrandText>
          <ProductName>{productDetail.name}</ProductName>
          <PriceText>정가 {productDetail.price}</PriceText>
        </ProductInfo>
        <Divider/>
        <ReportContainer>
          <ReportText>적합도 분석 리포트</ReportText>
          <ReportBox>
            <ReportMessage>내 피부와의 적합도가 궁금하다면?</ReportMessage>
            <ClickText>CLICK!</ClickText>
          </ReportBox>
        </ReportContainer>
      </ScrollView>
      <ButtonContainer>
        <FixedButton>
          <ButtonText>내 화장대에 등록하기</ButtonText>
        </FixedButton>
      </ButtonContainer>
    </Container>
  );
}

export default ProductDetailContainer;

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: 50px;
`;

const ProductImage = styled.Image<{width: number}>`
  width: ${({ width }) => (width-57)+'px'};
  height: undefinded;
  margin-top: 40px;
  aspect-ratio: 1/1;
  border-radius: 20px;
`;

const ProductInfo = styled.View`
  width: 100%;
  padding-top: 34px;
  gap: 4px;
`;

const BrandText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  // font-family: Pretendard;
  color: #959595;
  line-height: 24px;
`;

const ProductName = styled.Text`
  font-size: 30px;
  font-weight: 600;
  // font-family: Pretendard-Regular;
  color: #000000;
  line-height: 45px;
`;

const PriceText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  // font-family: Pretendard;
  color: #5D85EE;
  line-height: 30px;
`;

const Divider = styled.View`
  height: 0.7px;
  width: 100%;
  background-color: #AAAAAB;
  margin-vertical: 30px;
`

const ReportContainer = styled.View`
  width: 100%;
`;

const ReportText = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ReportBox = styled.View`
  background-color: rgba(203, 219, 255, 0.5);
  padding-vertical: 56px;
  border-radius: 20px;
  align-items: center;
`;

const ReportMessage = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #081533;
  font-weight: 500;
`;

const ClickText = styled.Text`
  font-size: 40px;
  color: #3A54AA;
  font-weight: 700;
`;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-contents: flex-start;
  padding-bottom: 24px;
  padding-horizontal: 18px;
`
const FixedButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #79A3FF;
  padding-vertical: 18.5px;
  align-items: center;
  border-radius: 28px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;
