/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'PopReg': ['PoppinsRegular'],
        'PopSB': ['PoppinsSemiBold'],
        'PopB': ['PoppinsBold'],
        'PopIt': ['PoppinsItalic'],
        'PopLgt': ['PoppinsLight'],
        'RobReg': ['RobotoRegular'],
        'RobMed': ['RobotoMedium'],
        'RobBld': ['RobotoBold'],
        'RobIt': ['RobotoItalic'],
        'RobLgt': ['RobotoLight'],
        'RobLgtIt': ['RobotoLightItalic']
      },
      colors: {
        'main': '#1E1E2F',
        'sec': '#394867',
        'emph': '#00ADB5',
        'txt': '#E0E0E0',
        'txt_emph': '#FFFFFF'
      }
    },
  },
  plugins: [],
}

