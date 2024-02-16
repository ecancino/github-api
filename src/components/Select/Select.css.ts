import { style, styleVariants } from '@vanilla-extract/css';
import { almostBlack, almostWhite, darkBlue, lightBlue } from '@app/styles/colors';

export const select = style({
  padding: '.5rem',
  borderWidth: '2px',
  borderRadius: '5px',
  borderColor: lightBlue,
  width: '100%',
  lineHeight: '1.5rem',
  fontSize: '1rem',
});

export const palette = {
  light: {
    color: darkBlue,
    backgroundColor: almostWhite,
  },
  dark: {
    color: lightBlue,
    backgroundColor: almostBlack,
  },
} as const;

export const variants = styleVariants(palette, (variant) => [select, variant]);
