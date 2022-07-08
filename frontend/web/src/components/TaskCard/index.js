import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';

// Imagens dos icones
import iconDeFault from '../../assets/default.png';

function TaskCard({type, title, when }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <S.Container>
        <S.TopCard>
            <img src={iconDeFault} alt="Icone da Tarefa" />
            <h3>{title}</h3>
        </S.TopCard>
        <S.BottomCard>
            <strong>{date}</strong>
            <span>{hour}</span>
        </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;