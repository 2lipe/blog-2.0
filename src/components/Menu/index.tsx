import React, { useState, useEffect, SetStateAction } from 'react';

import { Home } from 'styled-icons/boxicons-solid/index';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/index';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/index';
import { Bulb as Light } from 'styled-icons/boxicons-regular/index';
import { Grid } from 'styled-icons/boxicons-solid/index';
import { ThList as List } from 'styled-icons/typicons/index';

import * as S from './styled';

declare global {
  interface Window {
    display: SetStateAction<null>;
    onDisplayChange(this: Window, ev: Event): void;
    setPreferredDisplay(property: string | null): void;
  }
}

const MenuBar = () => {
  const [display, setDisplay] = useState(null);

  const isListMode = display === 'list';

  useEffect(() => {
    setDisplay(window.display);

    window.onDisplayChange = () => setDisplay(window.display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink to="/" cover direction="right" duration={0.6} title="Voltar para Home">
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink to="/search/" cover direction="right" duration={0.6} title="Pesquisar">
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema" onClick={() => {}}>
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.setPreferredDisplay(isListMode ? 'grid' : 'list');
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
