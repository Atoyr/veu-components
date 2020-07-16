const path = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/vue-components/' : '/'

module.exports = {
  publicPath: path,
  outputDir: 'dist',
  configureWebpack: 
  { 
    devtool: 'source-map' 
  }
}
