// src/theme/theme.ts

const theme = {
  colors: {
    app_blue_grdaients: {
      light_blue: '#79A3FF',
      middle_blue: '#CDDDFF',
      dark_blue: '#5D85EE'
    },
    dark_blue_gradients: {
      light_blue: '#5D85EE',
      dark_blue: '#3A54AA'
    },
    middle_blue: '#5D85EE',
    black: '#081533',
    blue: '#081533',
  },
  fonts: {
    family: {
      regular: 'Pretendard-Regular',
      bold: 'Pretendard-Bold',
      light: 'Pretendard-Light',
    },
    weight: {
      light: 400,
      regular: 500,
      bold: 700,
    },
    size: {
      small: '12px',
      medium: '16px',
      large: '24px',
    },
  },
  radius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
};

export type Theme = typeof theme; // 테마 타입
export default theme;
