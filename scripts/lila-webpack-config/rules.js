import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { extensions, browsers } from './settings';

export const babelLoader = () => [
  {
    loader: 'babel-loader',
    test: /\.js$/,
    options: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-flow'],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
          'ant',
        ],
      ],
    },
    exclude: [/node_modules/],
  },
  {
    loader: 'babel-loader',
    test: /\.jsx$/,
    options: {
      babelrc: false,
      configFile: false,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-flow',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-runtime',
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
          'ant',
        ],
      ],
    },
  },
];

export const urlLoader = () => ({
  loader: 'url-loader',
  options: {
    // 0 means infinite, put 1 here to disable base64.
    limit: 1,
  },
  test: new RegExp(`\\.(${extensions.join('|')})$`),
});

export const htmlLoader = () => ({
  loader: 'html-loader',
  test: /\.html$/,
  options: {
    attrs: ['img:src', 'link:href'],
    interpolate: 'require',
  },
});

export const cssLoader = isBuild => [
  {
    test: /\.css$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
    ],
    include: [/node_modules/],
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
    ],
    exclude: [/node_modules/],
  },
];

export const lessLoader = isBuild => [
  {
    test: /\.less$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
      {
        loader: 'less-loader',
      },
    ],
    include: [/node_modules/],
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
      {
        loader: 'less-loader',
      },
    ],
    exclude: [/node_modules/],
  },
];

export const sassLoader = isBuild => [
  {
    test: /\.(scss|sass)$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
      {
        loader: 'sass-loader',
      },
    ],
    include: [/node_modules/],
  },
  {
    test: /\.(scss|sass)$/,
    use: [
      {
        loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: { plugins: [autoprefixer({ browsers })] },
      },
      {
        loader: 'sass-loader',
      },
    ],
    exclude: [/node_modules/],
  },
];
