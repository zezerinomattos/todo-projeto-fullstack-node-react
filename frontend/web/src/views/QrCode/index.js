import React, { useState } from 'react';
import { Navigate} from 'react-router-dom';
import * as S from './styles';
import {QRCodeSVG} from 'qrcode.react';


//Nossos Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState()
    const [navigate, setNavigate] = useState(false);

    async function SaveMac(){
       if(!mac){
            alert('Você precisa informar o numero que apareceu no celular!');
       }else{
            //localStorage é uma propriedade que armazena informações dentro do navegador
            await localStorage.setItem('@todo/macaddress', mac);   
            setNavigate(true);    
            window.location.reload(); 
       }   
    }

    return(
        <S.Container>

            {navigate && <Navigate to="/" />}

            <Header />
            
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <QRCodeSVG value='getmacaddress' size={350} />  
                </S.QrCodeArea>    
                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                    <button type="button" onClick={SaveMac}>SINCRONIZAR</button>
                </S.ValidationCode>           
            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QrCode; //No value do QRCode posso colocar o nome que eu quiser para aparecer