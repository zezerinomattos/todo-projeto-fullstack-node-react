import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Nossos Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [navigate, setNavigate] =useState(false);


  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setTasks(response.data)
    })
  }
  


  function Notification(){
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks();

    if(!isConnected){
      setNavigate(true);
    }

  }, [filterActived])

  return (
    <S.Container>
     
      {navigate &&  <Navigate to="/qrcode" />}

      <Header  clicNotification={Notification}/>
    
      <S.FilterArea>
        <button type='button' onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos"   actived={filterActived == 'all'} />
        </button>
        <button type='button' onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje"    actived={filterActived == 'today'} />
        </button>
        <button type='button' onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana"  actived={filterActived == 'week'} />
        </button>
        <button type='button' onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês"     actived={filterActived == 'month'} />
        </button>
        <button type='button' onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano"     actived={filterActived == 'year'} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when} done={t.done} />
            </Link>
            
          ))
        }
        
      </S.Content>
    
      <Footer/>
    </S.Container>
  )
}

export default Home;
