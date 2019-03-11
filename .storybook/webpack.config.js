module.exports = {
  module: {
    rules: [
      {
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader',
        ],
        test: /\.less$/,
      },
      {
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
        test: /\.scss$/,
      },
    ],
  },
};
