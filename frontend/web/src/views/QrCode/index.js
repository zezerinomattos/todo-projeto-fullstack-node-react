import React, { useState, useEffect } from 'react';
import * as S from './styles';
import {QRCodeSVG} from 'qrcode.react';


//Nossos Componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    return(
        <S.Container>
            <Header />
            
            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <QRCodeSVG value='getmacaddress' size={350} />  
                </S.QrCodeArea>    
                <S.ValidationCode>
                    <span>Digite a numeração que apareceu no celular</span>
                    <input type="text" />
                    <button type='button'>SINCRONIZAR</button>
                </S.ValidationCode>           
            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default QrCode; //No value do QRCode posso colocar o nome que eu quiser para aparecer