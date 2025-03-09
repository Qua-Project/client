import ProductDetailContainer from "@/src/components/search/product-detail/container";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { RootParamList } from "@/src/types/type";

type ProductDetailRouteProp = RouteProp<RootParamList, 'ProductDetail'>;

export default function ProductDetailScreen() {
  const route = useRoute<ProductDetailRouteProp>();
  const { productDetail } = route.params;
  return <ProductDetailContainer productDetail={productDetail}/>;
}