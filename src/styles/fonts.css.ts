import { fontFace, globalFontFace } from '@vanilla-extract/css';

export const comfortaa = fontFace({
  src: "url('https://fonts.gstatic.com/s/comfortaa/v45/1Ptsg8LJRfWJmhDAuUs4Q4FqPfE.woff2') format('woff2-variations')",
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '300 700',
  unicodeRange: [
    'U+0100-02AF',
    'U+0304',
    'U+0308',
    'U+0329',
    'U+1E00-1E9F',
    'U+1EF2-1EFF',
    'U+2020',
    'U+20A0-20AB',
    'U+20AD-20C0',
    'U+2113',
    'U+2C60-2C7F',
    'U+A720-A7FF',
  ],
});

export const ubuntu = fontFace({
  src: "url('https://fonts.gstatic.com/s/ubuntu/v20/4iCp6KVjbNBYlgoKejZftVyPN4E.woff2') format('woff2-variations')",
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '100 800',
  unicodeRange: [
    'U+0100-02AF',
    'U+0304',
    'U+0308',
    'U+0329',
    'U+1E00-1E9F',
    'U+1EF2-1EFF',
    'U+2020',
    'U+20A0-20AB',
    'U+20AD-20C0',
    'U+2113',
    'U+2C60-2C7F',
    'U+A720-A7FF',
  ],
});

globalFontFace(ubuntu, {
  src: 'local("Ubuntu")',
});
