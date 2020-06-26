const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-preset-env')({ stage: 1 }),
]

if (process.env.NODE_ENV === 'production') {
  const purgeCSS = require('@fullhuman/postcss-purgecss')
  const htmlTags = require('html-tags')

  plugins.push(
    purgeCSS({
      whitelist: htmlTags,
    })
  )
}

module.exports = { plugins }
