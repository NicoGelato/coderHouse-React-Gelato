const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./src/*.jsx", "public/index.html"],
        }),
      ],
    },
  },
};