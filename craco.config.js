module.exports = {
  webpack: {
    configure: (webpackConfig, { env }) => {
      // Completely disable CSS minimization
      if (webpackConfig.optimization) {
        webpackConfig.optimization.minimize = false;
        
        // Remove all CSS minimization plugins
        if (webpackConfig.optimization.minimizer) {
          webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
            plugin => {
              const pluginName = plugin.constructor.name;
              console.log('Plugin found:', pluginName); // Debug log
              return !pluginName.includes('CssMinimizerPlugin') && 
                     !pluginName.includes('CssMinimizer') &&
                     !pluginName.includes('OptimizeCssAssetsWebpackPlugin');
            }
          );
        }
      }

      // Disable source maps
      if (process.env.GENERATE_SOURCEMAP === 'false') {
        webpackConfig.devtool = false;
      }

      console.log('CSS Minimization disabled via CRACO'); // Debug log
      return webpackConfig;
    },
  },
};