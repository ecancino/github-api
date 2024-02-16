import { style } from '@vanilla-extract/css';
import { themeVars } from '@app/styles/theme.css';

export const list = style({
  listStyle: 'none',
  padding: 0,
  borderLeft: `1rem solid ${themeVars.color.black}`,
});

export const listItem = style({
  fontSize: '3rem',
  textAlign: 'center',
  padding: '1rem 0',
});
