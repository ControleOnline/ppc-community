module.exports = (api) => {
  api.cache(true);

  const isProduction = process.env.NODE_ENV === "production";

  const aliasPaths = {
    // Alias de caminho padrão
    //"@controleonline": isProduction      ? "./node_modules/@controleonline"      : "./modules/controleonline",
    "@controleonline": "./modules/controleonline",
  };

  return {
    presets: ["@quasar/babel-preset-app"],
    plugins: [
      [
        "module-resolver",
        {
          alias: aliasPaths,
        },
      ],
    ],
  };
};
