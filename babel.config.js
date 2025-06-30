module.exports = api => {
  api.cache(true);

  const isProduction = process.env.NODE_ENV === 'production';

  const aliasPaths = {
    // Alias de caminho padrão
    //"@controleonline": isProduction      ? "./node_modules/@controleonline"      : "./modules/controleonline",
    '@controleonline': './modules/controleonline',
    '@env': './config/env.local.js',
    '@stores': './src/store/stores.js',
  };

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: aliasPaths,
        },
      ],
    ],
  };
};
