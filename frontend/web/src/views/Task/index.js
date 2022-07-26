import React, { useState, useEffect } from 'react';
import { Navigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { format } from 'date-fns';

import * as S from './styles';


import api from '../../services/api';
import isConnected from '../../utils/isConnected';

//Nossos Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Task({_id}) {
  const [navigate, setNavigate] = useState(false);
  const {id} = useParams();
  const [type, setType] = useState();
  //const [id, setId] = useState();
  const [done, setDone] = useState(false); //por padrao ele está iniciando com false
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  
  
  async function LoadTaskDetails(){
    await api.get(`/task/${id}`)
    .then(response =>{
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
  }

  async function Save(){
    //Validação dos dados
    if(!title){
      return alert("Você precisa informar o titulo da tarefa!")
    }else if(!description){
      return alert("Você precisa informar o descrição da tarefa!")
    }else if(!type){
      return alert("Você precisa selecionar o tipo da tarefa!")
    }else if(!date){
      return alert("Você precisa definir a data da tarefa!")
    }else if(!hour){
      return alert("Você precisa definir a hora da tarefa!")
    }

    if(id){
      await api.put(`/task/${id}`,{
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000` //Estou deixando a hora e data no formato do MONGO
      }).then(() =>
        alert('TAREFA CADASTRADA COM SUCESSO!'),
        setNavigate(true)
      )
    }else{
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000` //Estou deixando a hora e data no formato do MONGO
      }).then(() =>
        alert('TAREFA CADASTRADA COM SUCESSO!'),
        setNavigate(true)
      )
    }
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover a tarefa?');
    if(res == true){
      await api.delete(`/task/${id}`)
        .then(() => setNavigate(true));
    }
  }

  useEffect(() => {
    if(!isConnected){
      setNavigate(true);
    }
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>

      {navigate && <Navigate to="/" />}

      <Header />

      <S.Form>
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 && 
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tipo da Tarefa" 
                className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder='Titulo da tarefa' onChange={e => setTitle(e.target.value)} value={title}/>
        </S.Input>  
        
        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da tarefa..." onChange={e => setDescription(e.target.value)} value={description}/>
        </S.TextArea>  

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder='Titulo da tarefa' onChange={e => setDate(e.target.value)} value={date}/>
        </S.Input>  

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder='Titulo da tarefa' onChange={e => setHour(e.target.value)} value={hour}/>
        </S.Input> 

        <S.Options>
          <div>
            <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
            <span>CONCLUÍDO</span>
          </div>
          { id && <button type="button" onClick={Remove}>EXCLUIR</button>}
        </S.Options> 
        
        <S.Save>
          <button type="button" onClick={Save}>SALVAR</button>
        </S.Save>

      </S.Form>
              
      <Footer/>
    </S.Container>
  )
}

export default Task;
