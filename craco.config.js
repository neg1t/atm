const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#004E3F',
            '@layout-header-background': '#004E3F'
          },
          javascriptEnabled: true
        }
      }
    }
  },
  {
    plugin: CracoAlias,
    options: {
       source: "tsconfig",
       baseUrl: "./src",
       tsConfigPath: "./tsconfig.paths.json"
    }
 }
]
}