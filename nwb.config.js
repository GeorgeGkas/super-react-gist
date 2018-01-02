module.exports = {
  type: 'react-app',
  npm: {
    cjs: true,
    esModules: true,
    umd: 'ReactGistSimple',
    externals: {
        react: 'React'
      }
  }
}
