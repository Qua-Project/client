import { useSkinTypeStore } from '@/src/shared/hooks/stores/skin-type';
import { TEST_SLIDE_DATA } from '../utils/constants';

// // ✅ 테스트 점수 타입 정의
// interface TestResult {
//   SkinType: string;
//   O: number;
//   M: number;
//   S: number;
// }

// ✅ 선택한 옵션들을 받아서 점수를 계산하는 함수
export const calculateSkinType = (selectedOptions: Record<number, number>): SkinType.SkinTypeDto => {
  // ✅ 초기 점수 설정
  const score: SkinType.SkinTypeDto = {
    skinType: "",
    ubunScore: 0,
    subunScore: 0,
    mingamScore: 0,
    skinConcern: "",
  };

  // ✅ 사용자가 선택한 옵션들을 순회하면서 점수 계산
  Object.entries(selectedOptions).forEach(([questionId, optionIndex]) => {
    const question = TEST_SLIDE_DATA.find(q => q.id === Number(questionId));
    if (!question) return;
    

    if (questionId == '11'){
      score.skinConcern = question?.options[optionIndex-1];
    }
    const questionScores = question.scores[optionIndex];
    if (!questionScores) return;

    // ✅ 질문 타입에 따라 점수 추가
    question.types.forEach((type, idx) => {
      
      if (type === 'O') score.ubunScore += questionScores[idx] || 0;
      if (type === 'M') score.subunScore += questionScores[idx] || 0;
      if (type === 'S') score.mingamScore += questionScores[idx] || 0;
    });
    
  });

  // ✅ 점수 범위에 따라 최종 타입 결정
  const skinType =
    (score.ubunScore >= 4 && score.ubunScore <= 10 ? 'A' : score.ubunScore > 10 ? 'O' : '') +
    (score.subunScore >= 4 && score.subunScore <= 10 ? 'D' : score.subunScore > 10 ? 'M' : '') +
    (score.mingamScore >= 4 && score.mingamScore <= 10 ? 'R' : score.mingamScore > 10 ? 'S' : '');

  score.skinType = skinType || 'UNKNOWN';
  
  return score; // ✅ 점수가 없을 경우 기본값
};
