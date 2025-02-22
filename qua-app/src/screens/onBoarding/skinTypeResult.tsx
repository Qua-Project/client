import React from "react";
import SkinTypeResultContainer from "@/src/components/onBoarding/skin-type-result/container";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootParamList } from "@/src/types/type";

type ResultScreenRouteProp = RouteProp<RootParamList, 'SkinTypeResult'>;

export default function SkinTypeResultScreen() {
  const route = useRoute<ResultScreenRouteProp>();
  const { skinType } = route.params;

  return <SkinTypeResultContainer skinType={skinType} />;
}