import { style } from '@vanilla-extract/css';
import { comfortaa } from '@app/styles/fonts.css';
import { themeVars } from '@app/styles/theme.css';

const { blue, black, white } = themeVars.color;

export const cardTitle = style({
  color: blue.light,
  fontSize: '3rem',
  margin: '1rem 0',
  minHeight: '2rem',
});

export const cardOwner = style({
  color: blue.dark,
  fontSize: '1.5rem',
  margin: '1rem 0',
});

export const cardHeader = style({
  fontFamily: comfortaa,
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

export const cardTitleLink = style({
  fontSize: '1.5rem',
  margin: '1rem 0',
  textDecoration: 'none',
});

export const cardLink = style({
  fontSize: '1.1rem',
});

export const cardDesc = style({
  color: black,
  fontSize: '1rem',
  textAlign: 'justify',
});

export const cardCount = style({
  color: blue.light,
  fontSize: '1rem',
});

export const cardCounts = style({
  display: 'flex',
  justifyContent: 'space-around',
});

export const cardTopics = style({
  display: 'flex',
  flexFlow: 'row wrap',
  listStyle: 'none',
  margin: '1rem',
  padding: 0,
  justifyContent: 'space-between',
});

export const cardTopic = style({
  textAlign: 'center',
  borderStyle: 'solid',
  borderColor: blue.light,
  borderWidth: '1px',
  margin: '0.5rem',
  width: '20%',
  height: 'max-content',
});

export const cardTopicLink = style({
  color: blue.light,
  margin: 0,
  fontSize: '1.1rem',
  lineHeight: '1.5rem',
  display: 'inline-block',
  textDecoration: 'none',
  borderBottom: 'none',
  ':hover': {
    color: white,
    backgroundColor: blue.light,
  },
  width: '100%',
  height: '100%',
});

export const cardIntro = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'start',
  alignItems: 'center',
});

export const cardIntroContainer = style({
  fontFamily: comfortaa,
  width: '50%',
});
