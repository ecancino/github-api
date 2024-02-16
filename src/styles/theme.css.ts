import { createTheme } from '@vanilla-extract/css';
import { darkBlue, lightBlue, almostBlack, almostWhite } from './colors';

export const [themeClass, themeVars] = createTheme({
  color: {
    blue: {
      dark: darkBlue,
      light: lightBlue,
    },
    black: almostBlack,
    white: almostWhite,
  },
});
