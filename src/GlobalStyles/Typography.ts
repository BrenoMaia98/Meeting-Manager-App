import styled from 'styled-components/native';
import { ColorPalette } from './ColorPalette';

/*
 * font-family: 'Roboto', sans-serif;
 * font-family: 'Vampiro One', cursive;
 */

type FontProps = {
  white?: boolean;
  underline?: boolean;
};

export const H1 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 36px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H2 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 32px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H3 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 28px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H4 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 24px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H5 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 18px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const H6 = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 14px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;
export const Paragraph = styled.Text<FontProps>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-family: sans-serif;
  font-size: 16px;
  ${({ white }) => white && `color:${ColorPalette.white}`}
  ${({ underline }) => underline && `text-decoration:underline`}
`;

export const LogoText = styled.Text<{ small?: boolean }>`
  /* font-family: 'Roboto-Medium', sans-serif; */
  font-size: ${({ small }) => (small && 28) || 48}px;
`;
