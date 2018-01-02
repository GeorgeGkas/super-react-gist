module.exports = {
  type: 'react-app',
  npm: {
    cjs: true,
    esModules: true,
    umd: 'Gist',
    externals: {
        react: 'React'
      }
  }
}
