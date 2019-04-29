module.exports = {
  type: 'react-app',
  npm: {
    cjs: true,
    esModules: true,
    umd: {
      global: 'Gist',
      externals: {
        react: 'React'
      }
    }
  }
}
