module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          // TODO review this colors, maybe are gray
          800: '#1C1C24',
          900: '#131419',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  // darkMode: 'class',
}
