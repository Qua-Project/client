// src/theme/ThemeProvider.tsx

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from './theme';

interface Props {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
