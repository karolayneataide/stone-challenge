const sizes = {
  headline1: 48,
  headline2: 34,
  headline3: 24,
  headline4: 20,
  headline5: 18,
  headline6: 16,
  subtitle1: 16,
  subtitle2: 14,
  body1: 16,
  body2: 14,
  button: 14,
  caption: 12,
  overline: 10,
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
