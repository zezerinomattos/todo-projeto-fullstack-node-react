import React from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';


function Header({lateCount, clicNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir" />
        <a href="#">NOVA TAREFA</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir" />
        <button onClick={clicNotification} id="notification">
          <img src={bell} alt="Notificações" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
