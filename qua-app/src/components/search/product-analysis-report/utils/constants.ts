import { ProductDetail } from "@/src/types/type";

export const product:ProductDetail = {id: '1', brand: '라운드랩', name: '소나무 진정 시카 토너', price: '23,000원', type: '토너', image: require('@assets/search/productAnalysis/abib.png') };

export const productHeshtag = ['보습','진정','트러블케어','피지조절'];

export const fittness = [
  {key: "veryFit", image:require('@assets/search/productAnalysis/veryFit.png')},
  {key: "fit", image:require('@assets/search/productAnalysis/fit.png')},
  {key: "normal", image:require('@assets/search/productAnalysis/normal.png')},
  {key: "unfit", image:require('@assets/search/productAnalysis/unfit.png')},
  {key: "veryUnfit", image:require('@assets/search/productAnalysis/veryUnfit.png')},
];

export const typeDetail = [
  {heshTag: "보습", detail: "건조함을 예방하고 속당김을 줄여줍니다."},
  {heshTag: "진정", detail: "염증을 완화하여 민감한 피부를 진정시켜줍니다."},
  {heshTag: "트러블케어", detail: "여드름 예방과 완화에 효과적입니다."},
  {heshTag: "피지조절", detail: "과도한 피지 분비를 조절해 유수분 밸런스를 유지합니다."},
];