import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  colors: {
    purple: '#933EFF',
    lightPurple: '#C699FF',
    red: '#FA4B75',
    green: '#55EB7F',
    white: '#ffffff',
    black: '#000000',
  }
});

export default theme