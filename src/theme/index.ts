import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  colors: {
    purple: '#933EFF',
    lightPurple: '#F0E4FF',
    red: '#FA4B75',
    green: '#55EB7F',
    white: '#ffffff',
    black: '#000000',
  },
  breakpoints: {
    sm: '550px',
    md: '850px',
  }
});

export default theme