/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
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
        'txt_emph': '#FFFFFF', 

        'main-light': '#F5F5F5', 
        'sec-light': '#E0E0E0', 
        'emph-light': '#007A80', 
        'txt-light': '#2C2C2C', 
        'txt_emph-light': '#000000', 
      }
    },
  },
  plugins: [],
}

