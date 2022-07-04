import React from 'react';
import * as S from './styles';
import './styles.css';

import filter from '../../assets/filter.png';


function FilterCard({title, actived}) {
  return (
    <S.Container actived={actived}>
      <div id="container">
          <img src={filter} alt="Filtro" />
          <span>{title}</span>
      </div>
    </S.Container>
  )
}

export default FilterCard;