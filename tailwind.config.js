module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    fontFamily: {
      'sans-serif': ['sans-serif'],
      'serif': ['serif']
    },
    extend: {
      colors: {
        'primary-100': "#e8f8f5",
        'primary-200': "#a3e4d7",
        'primary-300': "#76d7c4",
        'primary-400': "#48c9b0",
        'primary-500': "#1abc9c",
        'primary-600': "#17a98c",
        'primary-700': "#15967d",
        'primary-800': "#10715e",
        'primary-900': "#0a4b3e",
        'secondary-100': "#d6dbdf",
        'secondary-200': "#aeb6bf",
        'secondary-300': "#85929e",
        'secondary-400': "#5d6d7e",
        'secondary-500': "#34495e",
        'secondary-600': "#2f4255",
        'secondary-700': "#2a3a4b",
        'secondary-800': "#1f2c38",
        'secondary-900': "#151d26",
        'accent-100': "#d6eaf8",
        'accent-200': "#aed6f1",
        'accent-300': "#85c1e9",
        'accent-400': "#5dade2",
        'accent-500': "#3498db",
        'accent-600': "#2f89c5",
        'accent-700': "#2a7aaf",
        'accent-800': "#1f5b83",
        'accent-900': "#153d58",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
