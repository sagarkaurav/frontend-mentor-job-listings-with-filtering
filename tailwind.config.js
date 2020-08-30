module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./public/index.html",
      "./public/js/*.js"
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'primary-text': 'var(--primary-text)'
      }
    },
  },
  variants: {},
  plugins: [],
}
