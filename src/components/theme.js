import {createText, createBox, useTheme as useReTheme} from '@shopify/restyle';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

const theme = {
  colors: {
    white: '#fff',
    primary: '#2CB9B0',
    text: 'rgba(12,13,52,0.7)',
    button: '#0C0D34',
    color: '#000',
    grey: 'rgba(12,13,52,0.05)',
    secondary: '#0C0D34',
    'slide.grey': '#F4F0EF',
    darkGrey: '#BABD98',
    grey: '#dcdcdc',
    danger: '#ff0055',
    primaryLight: '#E7F9F7',
    barter: '#000',
    barter2: '#FFCB60',
    barter3: '#F8F6AF',
    barter4: '#94230C',
    black: '#000000',
  },

  spacing: {
    s: 8,
    m: 16,
    l: 30,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: 'sans-serif',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 80,
      fontFamily: 'sans-serif',
      color: 'white',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'sans-serif',
      color: 'color',
    },
    body: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: 'sans-serif',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'sans-serif',
      color: 'text',
    },
  },
  breakpoints: {},
};

export const Text = createText();
export const Box = createBox();
export const useTheme = () => useReTheme();

export const makeStyles = (styles) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

export default theme;
