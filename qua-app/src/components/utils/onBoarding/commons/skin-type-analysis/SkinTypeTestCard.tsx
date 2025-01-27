import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SkinTypeTestCardProps {
  question: string; // 질문 텍스트
  options: string[]; // 옵션 리스트
  selectedOptionIndex: number | undefined; // 선택된 옵션 인덱스
  onSelect: (optionIndex: number) => void; // 선택 이벤트 핸들러
}

const SkinTypeTestCard: React.FC<SkinTypeTestCardProps> = ({
  question,
  options,
  selectedOptionIndex,
  onSelect,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOptionIndex === index && styles.selectedOption, // 선택된 옵션 스타일
            ]}
            onPress={() => onSelect(index)} // 선택 이벤트 호출
          >
            <Text
              style={[
                styles.optionText,
                selectedOptionIndex === index && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SkinTypeTestCard;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
  },
  option: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#3A54AA',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#FFF',
  },
});
