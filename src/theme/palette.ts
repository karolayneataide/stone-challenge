const common = {
  black: '#000000',
  white: '#FFFFFF',
  transparent: 'transparent',
} as const;

const primary = {
  '100': '#42EC9A',
  '200': '#0AF53D',
  '300': '#00A868',
  '400': '#008E5A',
  '500': '#00734D',
} as const;

const gray = {
  '100': '#EFF4F8',
  '200': '#BCC8D6',
  '300': '#919DAB',
  '400': '#67707D',
  '500': '#424A53',
  '600': '#31383F',
  '700': '#20252A',
} as const;

export default {
  common,
  primary,
  gray,
};
