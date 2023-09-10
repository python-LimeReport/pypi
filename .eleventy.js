const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
      if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDocType: true,
          removeComments: true,
          collapseWhitespace: true,
        })

        return minified;
      }
    })

    return {
        dir: {
          input: 'src',
          output: 'dist',
          includes: 'includes',
          layouts: 'layouts',
          data: 'data',
        },
        dataTemplateEngine: 'njk',
    }
}