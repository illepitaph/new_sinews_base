module.exports = {
  async rewrites() {
    return [

      {
        source: '/gridley',
        destination: '/issue1/gridley',
      },

      {
        source: '/blackwell',
        destination: '/issue1/blackwell',
      },

      {
        source: '/romanosky',
        destination: '/issue1/romanosky',
      },

      {
        source: '/eisen-martin',
        destination: '/issue1/eisen-martin',
      },

      {
        source: '/nao',
        destination: '/issue1/nao',
      },

      {
        source: '/evenflesh',
        destination: '/issue1/evenflesh',
      },

      {
        source: '/issue1bios',
        destination: '/issue1/bios',
      },

      {
        source: '/issue1',
        destination: '/issue1/index',
      },

    ]
  },
}
