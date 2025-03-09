import { useEffect, useState } from "react";
import styled from "@emotion/native";
import BackButton from "@/src/components/commons/BackButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { FlatList, Image, Keyboard, TouchableWithoutFeedback, StyleSheet, ScrollView} from "react-native";
import { RootParamList } from "@/src/types/type";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import WaitingCard from "../product-detail/commons/WaitingCard";
import { product, productHeshtag } from "./utils/constants";
import FittnessCard from "./commons/FittnessCard";
import SkinTypeDeatil from "./commons/SkinTypeDetail";
import FitAnalysisCard from "./commons/FitAnalysisCard";

const ProductAnalysisReportContainer:React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList, 'ProductAnalysisReport'>>(); 
  
  return (
    <Container>
      <HeaderContainer>
        <BackButton/>
        <TitleContainer>
          <Title>적합도 분석 결과</Title>
        </TitleContainer>
      </HeaderContainer>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}  showsVerticalScrollIndicator={false}>
        <CardContainer>
          <ProductImage source={product.image} />
          <InfoContainer>
            <BrandText>{product.brand}</BrandText>
            <ProductName>{product.name}</ProductName>
            <KeywordContainer>
              {productHeshtag.map((keyword, index) => (
                <KeywordTag key={index}>
                  <KeywordText>{keyword}</KeywordText>
                </KeywordTag>
              ))}
            </KeywordContainer>
          </InfoContainer>
        </CardContainer>
        <FittnessCard fittnessKey="veryFit" />
        <SkinTypeDeatil skinType="ODS"/>
        <FitAnalysisCard/>
      </ScrollView>
    </Container>
  );
}

export default ProductAnalysisReportContainer;

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding-top: 50px;
`;
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`
const TitleContainer = styled.View`
  flex:1;
  margin-top: 10px;
  margin-right: 49px;
  align-items: center;
  justify-content: center;
`
const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`

const CardContainer = styled.View`
  margin-top: 32px;
  margin-horizontal: 23px;
  padding-vertical: 15px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(244, 247, 255, 1);
  border-radius: 10px;
`;

const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 30px;
  margin-left: 15px;
  aspect-ratio: 1/1;
  resize-mode: contain;
  border-radius: 5px;
`;

const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  gap: 4px;
`;

const BrandText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: rgba(129, 129, 130, 1);
`;

const ProductName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #081533;
`;

const KeywordContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const KeywordTag = styled.View`
  background-color: #5D85EE;
  padding: 2px 5px;
  border-radius: 3px;
`;

const KeywordText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 600;
`;

