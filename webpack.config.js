const config = {
  mode: "production",

  entry: {
    index: "./src/js/index.js",
    articl: "./src/js/articl.js",
    services: "./src/js/services.js",
    news: "./src/js/news.js",
    newsPage: "./src/js/news-page.js",
    inputmask: "./src/js/modules/inputmask.min.js",
    mobileNav: "./src/js/modules/mobile-nav.js",
  },

  output: {
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
