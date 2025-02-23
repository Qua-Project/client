import React from 'react';
import styled from '@emotion/native';
import MyDresserBottomSheet from './MyDresserBottomSheet';
interface MyDresserProps {
  headerHeight: number; 
}

const MyDresser: React.FC<MyDresserProps> = ({headerHeight}) => {  
  return (
    <Container>
      {/* 🔹 중앙 메인 이미지 */}
      <MainImage source={require('@assets/home/dressing_table.png')} headerHeight={headerHeight}/>
      {/* <MyDresserBottomSheet/> */}
    </Container>
    
  );
};

export default MyDresser;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;;

const MainImage = styled.Image<{ headerHeight: number }>`
  width: 100%;
  z-index: -1;
  resize-mode: cover;
  position: absolute;
  top: ${({ headerHeight }) => `${headerHeight}px`}; /* ✅ 헤더 바로 아래 위치 */
  align-self: center;
`;

