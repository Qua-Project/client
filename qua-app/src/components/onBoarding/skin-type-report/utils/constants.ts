export const SKIN_CARE_STEP_TIPS = [
  {
    label: '클렌징',
    activeIcon: require('@/assets/onBoarding/clensing_active.png'), 
    inactiveIcon: require('@/assets/onBoarding/clensing.png'),
    careTips: [
      { title: '저자극 클렌저를 사용하세요.', description: '강한 세정제는 피부의 유수분 밸런스를 무너뜨릴 수 있어요. pH 5.5~6.5 범위의 약산성 클렌저를 선택하세요.' },
      { title: '이중 세안은 필요 없어요.', description: '과도한 세안이 오히려 피부 장벽을 약화시킬 수 있으니, 한 번의 부드러운 세안으로 충분합니다.' },
      { title: '미지근한 물을 사용하세요.', description: '너무 뜨겁거나 찬물은 민감한 피부를 자극할 수 있으니, 미지근한 물로 세안하세요.' },
      { title: 'T존 중심으로 세안해주세요.', description: '피지 분비가 많은 부위(T존)를 꼼꼼히 세정하되, 민감한 부위(U존)는 부드럽게 다루세요.' },
    ],
    cautionTips: [
      { title: '알코올 성분 함유 제품', description: '피부 자극과 건조를 유발할 수 있으니 피하세요.' },
      { title: '과도한 클렌징', description: '과한 클렌징은 피부의 민감함을 악화시킬 수 있어요.' },
      { title: '스크럽 사용', description: '물리적 자극이 큰 스크럽 제품은 피하세요.' },
      { title: '수건으로 문지르지 않기', description: '얼굴을 닦을 때는 부드럽게 눌러 물기를 제거하세요.' },
    ],
  },
  {
    label: '스킨/토너',
    activeIcon: require('@/assets/onBoarding/toner_active.png'), 
    inactiveIcon: require('@/assets/onBoarding/toner.png'),
    careTips: [
      { title: '알코올 프리 토너를 사용하세요.', description: '알코올이 함유된 토너는 피부를 건조하게 하고 민감성을 악화시킬 수 있어요.' },
      { title: '손바닥으로 흡수시키세요.', description: '화장솜 대신 손바닥을 이용해 피부에 두드려 흡수시키면 자극을 줄일 수 있어요.' },
      { title: '피부 장벽 강화 성분을 포함하세요.', description: '세라마이드, 히알루론산, 아미노산 등은 피부 장벽을 강화하고 수분을 유지시켜요.' },
      { title: '냉장 보관해서 사용해보세요.', description: '차갑게 보관한 토너는 피부를 진정시키는 데 효과적이에요.' },
    ],
    cautionTips: [
      { title: '향료 및 자극 성분', description: '향료, 페녹시에탄올 등의 자극 성분은 피부에 스트레스를 줄 수 있어요.' },
      { title: '오일 베이스 토너', description: '유분이 많은 피부에는 무겁게 느껴질 수 있어요.' },
      { title: '과도한 사용', description: '토너를 지나치게 사용하면 유수분 밸런스가 무너질 수 있어요.' },
      { title: '각질 제거 성분 포함 제품', description: '민감한 피부에는 AHA, BHA가 함유된 토너가 자극적일 수 있어요.' },
    ],
  },
  {
    label: '앰플/세럼', 
    activeIcon: require('@/assets/onBoarding/serum_active.png'), 
    inactiveIcon: require('@/assets/onBoarding/serum.png'),
    careTips: [
      { title: '진정과 수분 공급 효과가 좋은 세럼을 선택하세요.', description: '히알루론산, 병풀추출물 성분이 함유된 제품이 좋아요.' },
      { title: '가벼운 텍스처의 세럼을 사용하세요.', description: '무거운 오일 기반 세럼은 지성 요소를 악화시키고 모공을 막을 수 있으므로, 가벼운 젤 또는 워터 베이스 세럼을 사용하세요.' },
      { title: '피부 장벽 강화 성분을 포함하세요.', description: '민감성 피부는 세라마이드, 마데카소사이드 같은 피부 장벽 강화 성분으로 보호할 필요가 있어요.' },
      { title: 'T존은 얇게, U존은 충분히 바르세요.', description: '유분이 많은 T존에는 얇게 바르고, 건조하기 쉬운 U존에는 조금 더 신경 써서 바르세요.' },
    ],
    cautionTips: [
      { title: '자극이 강한 성분', description: '비타민 C, 레티놀, 고농도의 AHA/BHA는 민감성 피부를 자극하거나 염증 반응을 일으킬 수 있어요.' },
      { title: '겹겹이 바르기', description: '여러 종류의 세럼을 겹쳐 바르면 성분 간 충돌로 피부 자극이나 트러블이 발생할 수 있어요. 최대 2종류의 세럼을 사용하세요.' },
      { title: '오일 베이스 세럼', description: '오일 성분은 모공을 막을 수 있으니 피하세요.' },
      { title: '피부 상태가 좋지 않을 때 사용', description: '피부가 예민하거나 붉어진 날에는 사용을 쉬는 것이 좋아요.' },
    ],
  },
  {
    label: '로션/크림', 
    activeIcon: require('@/assets/onBoarding/cream_active.png'), 
    inactiveIcon: require('@/assets/onBoarding/cream.png'),
    careTips: [
      { title: '갸벼운 텍스처를 선택하세요.', description: '유분이 많지 않은 가벼운 젤 타입이나 로션 타입을 선택하세요.' },
      { title: '피주 장벽 강화 성분을 사용하세요.', description: '세라마이드, 스쿠알렌, 판테놀 등은 피부 장벽을 강화하고 수분 손실을 예방해요.' },
      { title: '얼굴 전체에 고르게 발라주세요.', description: '건조한 부분에 더 신경 쓰되, 전체적으로 얇게 발라주세요.' },
      { title: '건조한 부위는 추가 보습', description: '볼이나 턱 등 건조한 부위에는 한 번 더 덧발라 보습을 강화 하세요.' },
    ],
    cautionTips: [
      { title: '강한 향료 포함 제품', description: '향료가 강한 로션은 피부 자극을 유발할 수 있으니 무향 제품을 추천해요.' },
      { title: '피지 유발 성분', description: '미네랄 오일이나 코코넛 오일 같은 성분은 유분이 많은 피부에 적합하지 않아요.' },
      { title: '텍스처가 무거운 크림', description: '지나치게 리치한 크림은 모공을 막아 트러블을 유발할 수 있어요. 가벼운 수분크림이나 젤 크림 제형을 우선적으로 사용하세요.' },
      { title: '과도한 사용', description: '지나치게 많은 양을 바르면 피부가 필요 이상의 유분을 흡수해 모공이 막히거나 끈적임을 유발할 수 있어요.' },
    ],
  },
];

export enum TipType {
  CARE_TIP = 'care',
  CAUTION_TIP = 'caution',
}