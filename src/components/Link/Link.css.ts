import { style } from '@vanilla-extract/css';
import { themeVars } from '@app/styles/theme.css';
import { comfortaa } from '@app/styles/fonts.css';

const { blue } = themeVars.color;

export const link = style({
  fontFamily: comfortaa,
  color: blue.dark,
  fontSize: '1.5rem',
  margin: '1rem 0',
  textDecoration: 'none',
  borderBottom: `1px solid ${blue.light}`,
  ':hover': {
    color: blue.light,
  },
});
