export type RootParamList = {
  Login: undefined;
  Tab: undefined;
  SkinTypeTest: undefined;
  SkinTypeResult: { skinType: string };
  SkinTypeReport: undefined;
  OnBoarding: undefined;
  Basic: undefined;
  Nickname: undefined;
  Home: undefined;
  Add: undefined;
  Login: undefined;
  Search: undefined;
  SearchProduct: undefined;
  Ranking: undefined;
  Explore: undefined;
  ProductDetail: {productDetail: ProductDetail};
  ProductAnalysisReport: undefined;
};

export type ProductDetail = {
  id: string;
  image: any; 
  name: string; 
  brand: string; 
  type: string; 
  price: string;
};