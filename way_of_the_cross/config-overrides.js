const path = require("path");

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    react: require.resolve("react"),
    "react-dom": require.resolve("react-dom"),
  };
  return config;
};