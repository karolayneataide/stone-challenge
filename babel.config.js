module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@ions': './src/components/ions/index.ts',
            '@atoms': './src/components/atoms/index.ts',
            '@molecules': './src/components/molecules/index.ts',
            '@organisms': './src/components/organisms/index.ts',
          },
        },
      ],
    ],
  };
};
