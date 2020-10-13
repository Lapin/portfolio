module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'darkish': "#282c34",
        'dribbble': "#ea4c89",
        'insta1': "#f77737",
        'insta2': "#f56040",
        'accent': "#F2F8FF", 
        'accentBorder': "#E2E8F0",
      },
      fontFamily: {
        'Inter': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'large': '1.25rem'
      }
    },
  },
  variants: {},
  plugins: [],
}