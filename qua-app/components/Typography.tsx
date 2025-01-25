/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';

interface TypographyProps {
  variant?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'regular' | 'bold';
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'medium',
  weight = 'regular',
  children,
}) => {
  const theme = useTheme();

  const typographyStyle = css`
    font-size: ${theme.fonts.size[variant]};
    font-family: ${theme.fonts.family[weight]};
  `;

  return <p css={typographyStyle}>{children}</p>;
};

export default Typography;

