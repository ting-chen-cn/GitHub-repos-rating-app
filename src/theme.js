import { Platform } from 'react-native';
const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#FFFFFF',
    primary: '#0366d6',
    mainBackground:'#e1e4e8',
    appBarBackground: '#24292e',
    appBarText: '#999999',
    imageBackground: '#ele4e8',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 24,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto ',
      ios: 'Arial ',
      default:'System',
  })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;