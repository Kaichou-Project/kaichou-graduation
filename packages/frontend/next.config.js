module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        destination: '/submission',
        permanent: false,
      },
    ]
  },
}
