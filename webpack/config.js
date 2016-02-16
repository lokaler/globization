import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const developmentEnvironment = 'development';
const productionEnvironment = 'production';
const testEnvironment = 'test';

function root(p) {
  return path.resolve(__dirname, '..', p);
}

function clean(arr) {
  return arr.filter(v => !!v);
}

function getPlugins(env) {
  const dev = env === developmentEnvironment;
  const prod = env === productionEnvironment;

  const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify(env),
    __DEV__: dev
  };

  return clean([

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),

    dev && new webpack.HotModuleReplacementPlugin(),
    dev && new webpack.NoErrorsPlugin(),

    prod && new ExtractTextPlugin('styles.css'),
    prod && new webpack.optimize.DedupePlugin(),
    prod && new webpack.optimize.UglifyJsPlugin()

  ]);
}

function getEntry(env) {
  const dev = env === developmentEnvironment;

  return clean([
    dev && 'webpack-hot-middleware/client',
    './src/index'
  ]);
}

function getLoaders(env) {
  const dev = env === developmentEnvironment;
  const prod = env === productionEnvironment;

  return clean([
    {
      test: /\.js$/,
      include: root('src'),
      loaders: ['react-hot', 'babel', 'eslint']
    },

    dev && {
      test: /(\.css|\.scss)$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    },

    prod && {
      test: /(\.css|\.scss)$/,
      loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
    }

  ]);
}

function getConfig(env) {
  return {
    debug: true,
    // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and
    // https://webpack.github.io/docs/configuration.html#devtool
    devtool: env === productionEnvironment ? 'source-map' : 'cheap-module-source-map',
    // set to false to see a list of every file being bundled.
    noInfo: true,
    entry: getEntry(env),
    // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    target: env === testEnvironment ? 'node' : 'web',
    output: {
      // Note: Physical files are only output by the production build task `npm run build`.
      path: root('dist'),
      publicPath: '',
      filename: 'bundle.js'
    },
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env)
    }
  };
}

export default getConfig;
