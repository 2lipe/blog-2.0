import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import Sidebar from '../Sidebar';
import Menu from '../Menu';

import GlobalStyles from '../../styles/globalStyles';
import dark from '../../styles/theme/dark';

import * as S from './styled';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={dark}>
      <S.LayoutWrapper>
        <GlobalStyles />
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
        <Menu />
      </S.LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
