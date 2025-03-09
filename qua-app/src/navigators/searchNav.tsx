import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/search/searchMain";
import SearchProductScreen from "../screens/search/searchProduct";
import RankingScreen from "../screens/search/ranking";
import ProductDetailScreen from "../screens/search/productDetail";
import ProductAnalysisReportContainer from "../components/search/product-analysis-report/container";
import ProductAnalysisReportScreen from "../screens/search/productAnalysisReport";

const SearchStack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchProduct" component={SearchProductScreen} />
      <SearchStack.Screen name="Ranking" component={RankingScreen} />
      <SearchStack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <SearchStack.Screen name="ProductAnalysisReport" component={ProductAnalysisReportScreen} />
    </SearchStack.Navigator>
  );
}
