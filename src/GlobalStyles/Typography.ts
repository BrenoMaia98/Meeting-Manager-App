import styled from 'styled-components/native';
import { ColorPalette } from './ColorPalette';

/*
 * font-family: 'Roboto', sans-serif;
 * font-family: 'Vampiro One', cursive;
 */

type FontProps = {
  color?: string;
  underline?: boolean;
};

export const H1 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 36px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H2 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 32px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H3 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 28px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H4 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 24px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H5 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 18px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H6 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 14px;
  ${({ color }) => color && `color:${color}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const Paragraph = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  /* font-family: sans-serif; */
  font-size: 16px;
  ${({ color }) => color && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;

export const LogoText = styled.Text<{ small?: boolean }>`
  /* font-family: 'Vampiro-One', sans-serif; */
  font-size: ${({ small }) => (small && 28) || 48}px;
`;
