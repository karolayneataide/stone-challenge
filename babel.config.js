module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@types': './src/@types/index.d.ts',
            '@ions': './src/components/ions/index.ts',
            '@atoms': './src/components/atoms/index.ts',
            '@molecules': './src/components/molecules/index.ts',
            '@organisms': './src/components/organisms/index.ts',
            '@hooks': './src/hooks/index.ts',
            '@providers': './src/providers/index.ts',
            '@screens': './src/screens/index.ts',
            '@theme': './src/theme/index.ts',
            '@utils': './src/utils/index.ts',
          },
        },
      ],
    ],
  };
};
