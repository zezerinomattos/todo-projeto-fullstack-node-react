import React from 'react';
import * as S from './styles';

// Imagens dos icones
import iconDeFault from '../../assets/default.png';

function TaskCard() {
  return (
    <S.Container>
        <S.TopCard>
            <img src={iconDeFault} alt="Icone da Tarefa" />
            <h3>Titulo da Tarefa</h3>
        </S.TopCard>
        <S.BottomCard>
            <strong>17/10/2020</strong>
            <span>10:00</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;