module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { useTransformReactJSXExperimental: true }],
    ],
    plugins: ["nativewind/babel", "react-native-paper/babel"],
  };
};
