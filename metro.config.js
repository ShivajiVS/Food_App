// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);

// ==================================
// const { getDefaultConfig } = require('@expo/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push('cjs');

// module.exports = defaultConfig;


// module.exports = {
//     transformer: {
//         getTransformOptions: async () => ({
//             transform: {
//                 experimentalImportSupport: true,
//                 inlineRequires: true,
//             },
//         }),
//     },
// };


// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.transformer.minifierPath = 'metro-minify-uglify';
// config.transformer.minifierConfig = {
//     // Options: https://github.com/mishoo/UglifyJS#compress-options
// };

// module.exports = config;



// const { getDefaultConfig } = require('@expo/metro-config');

// const config = getDefaultConfig(__dirname);

// config.resolver.resolverMainFields.unshift('react-native');

// module.exports = config;

// const { getDefaultConfig } = require("metro-config");

// module.exports = async () => {
//     const {
//         resolver: { sourceExts },
//         transformer: { assetPlugins },
//     } = await getDefaultConfig(__dirname);

//     return {
//         resolver: {
//             assetExts: ["pb", "mp3", "ttf", "otf"],
//             sourceExts: [...sourceExts, "svg"],
//         },
//         transformer: {
//             assetPlugins: [
//                 require.resolve("expo-asset/tools/hashAssetFiles"),
//                 ...assetPlugins,
//             ],
//             babelTransformerPath: require.resolve("react-native-svg-transformer"),
//         },
//     };
// };


const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { assetExts }
    } = await getDefaultConfig();
    return {
        resolver: {
            assetExts: [...assetExts, 'png', 'jpg', 'jpeg'],
        },
    };
})();