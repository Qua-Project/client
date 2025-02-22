import { TEST_SLIDE_DATA } from '../utils/constants';

// ✅ 테스트 점수 타입 정의
interface TestResult {
  O: number;
  M: number;
  S: number;
}

// ✅ 선택한 옵션들을 받아서 점수를 계산하는 함수
export const calculateSkinType = (selectedOptions: Record<number, number>): string => {
  // ✅ 초기 점수 설정
  const score: TestResult = { O: 0, M: 0, S: 0 };

  // ✅ 사용자가 선택한 옵션들을 순회하면서 점수 계산
  Object.entries(selectedOptions).forEach(([questionId, optionIndex]) => {
    const question = TEST_SLIDE_DATA.find(q => q.id === Number(questionId));
    if (!question) return;

    const questionScores = question.scores[optionIndex + 1];
    if (!questionScores) return;

    // ✅ 질문 타입에 따라 점수 추가
    question.types.forEach((type, idx) => {
      if (type === 'O') score.O += questionScores[idx] || 0;
      if (type === 'M') score.M += questionScores[idx] || 0;
      if (type === 'S') score.S += questionScores[idx] || 0;
    });
    console.log('question'+ questionId + ':'+questionScores);
  });

  console.log("점수 결과:", score);

  // ✅ 점수 범위에 따라 최종 타입 결정
  const skinType =
    (score.O >= 4 && score.O <= 10 ? 'A' : score.O > 10 ? 'O' : '') +
    (score.M >= 4 && score.M <= 10 ? 'D' : score.M > 10 ? 'M' : '') +
    (score.S >= 4 && score.S <= 10 ? 'R' : score.S > 10 ? 'S' : '');

  return skinType || 'UNKNOWN'; // ✅ 점수가 없을 경우 기본값
};
