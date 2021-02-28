/* eslint-disable prettier/prettier */
/* eslint global-require: 0 */
/* eslint no-var: 0 */
/* eslint func-names: 0 */

module.exports = function (api) {
  const validEnv = ["development", "test", "production"];
  const currentEnv = api.env();
  const isDevelopmentEnv = api.env("development");
  const isProductionEnv = api.env("production");
  const isTestEnv = api.env("test");

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      // eslint-disable-next-line prefer-template
      "Please specify a valid `NODE_ENV` or " +
      "`BABEL_ENV` environment variables. Valid values are 'development', " +
      "'test', and 'production'. Instead, received: " +
      JSON.stringify(currentEnv) +
      "."
    );
  }

  return {
    presets: [
      isTestEnv && [
        require("@babel/preset-env").default,
        {
          targets: {
            node: "current",
          },
        },
      ],
      (isProductionEnv || isDevelopmentEnv) && [
        require("@babel/preset-env").default,
      ],
      require('@babel/preset-react').default,
    ].filter(Boolean),
    plugins: [
      'react-hot-loader/babel',
      'lodash',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-regenerator',
      '@babel/plugin-transform-runtime',
    ]
  };
};
