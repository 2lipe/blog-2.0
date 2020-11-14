import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      borders: string;
      texts: string;
      postColor: string;
      highlight: string;

      mediumBackground: string;
      background: string;

      white: string;
      blackLighter: string;
    };
  }
}
