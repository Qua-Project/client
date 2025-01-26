// src/theme/theme.ts

import { Theme } from "@emotion/react";
declare module '@emotion/react'{
  export interface Theme {
    colors: {
      app_blue_grdaients: {
        light_blue: string,
        middle_blue: string
      },
      dark_blue_gradients: {
        light_blue: string,
        dark_blue: string
      },
      middle_blue: string,
      black: string,
      blue: string,
    },
    fonts: {
      family: {
        regular: string,
        bold: string,
        light: string,
      },
      weight: {
        light: number,
        regular: number,
        bold: number,
      },
      size: {
        small: string,
        medium: string,
        large: string,
      },
    },
    radius: {
      small: string,
      medium: string,
      large: string,
    },
  }
}

const theme: Theme = {
  colors: {
    app_blue_grdaients: {
      light_blue: '#79A3FF',
      middle_blue: '#CDDDFF'    
    },
    dark_blue_gradients: {
      light_blue: '#5D85EE',
      dark_blue: '#3A54AA'
    },
    middle_blue: '#5D85EE',
    black: '#081533',
    blue: '#79A3FF',
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
}

export default theme;
