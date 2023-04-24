const sizes = {
  headline1: '48px',
  headline2: '34px',
  headline3: '24px',
  headline4: '20px',
  headline5: '18px',
  headline6: '16px',
  subtitle1: '16px',
  subtitle2: '14px',
  body1: '16px',
  body2: '14px',
  button: '14px',
  caption: '12px',
  overline: '10px',
} as const;

const weights = {
  regular: '400',
  medium: '500',
  bold: '700',
} as const;

export default {
  sizes,
  weights,
};
