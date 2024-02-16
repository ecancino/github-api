import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css';
import { comfortaa } from './fonts.css';

const { blue, white } = themeVars.color;

globalStyle('body', {
  fontFamily: comfortaa,
  margin: '1rem',
  padding: 0,
  backgroundColor: white,
});

globalStyle('hr', {
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: blue.light,
  margin: '1rem 0',
});
