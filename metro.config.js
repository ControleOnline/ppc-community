const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {resolve} = require('metro-resolver');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = mergeConfig(defaultConfig, {
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    resolveRequest(context, moduleName, platform) {
      // Força axios a usar bundle browser (evita `crypto`, `http`, etc.)
      if (
        moduleName === 'axios' ||
        moduleName === 'axios/dist/node/axios.cjs' ||
        moduleName === 'axios/dist/node/axios.js'
      ) {
        return resolve(context, 'axios/dist/browser/axios.cjs', platform);
      }
      return resolve(context, moduleName, platform);
    },
  },
});
