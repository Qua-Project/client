import '@emotion/react';
import { Theme as CustomTheme } from './theme'; // theme.ts에서 정의한 테마 가져오기

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
