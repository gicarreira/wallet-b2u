import React, { Component } from 'react'
import IconeEnvelope from '../../assets/imgs/abertura/IconeEnvelope.svg'
import IconeVoltar from '../../assets/imgs/biz/IconeVoltar.svg'
import IconeShelby from '../../assets/imgs/biz/IconeShelby.svg'
import { Redirect } from "react-router-dom"
import '../../styles/abertura/abertura.css'

export default class Abertura extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="abertura">
            <div className='topo-biz'>
            <img src={IconeVoltar} alt="icone-voltar"/>
            <h1>Abertura de conta</h1>
            <img src={IconeShelby} alt="icone-shelby"/>
            </div>
            <br />
            <br />
            <br />
            <div className='imagem-abertura'>
            <img src={IconeEnvelope} alt="icone-envelope"/>
            </div>
            <br />
            <div className='abertura-texto'>
            <h2>Agora é só esperar</h2>
            <h2>o e-mail de confirmação.</h2>
            <br />
            
            <p>Vamos analisar todas as suas</p>
            <p>informações para seguir com a</p>
            <p>abertura da sua conta.</p>
            <br />
            <p>Se ela for aprovada, você vai receber</p>
            <p>um e-mail de confirmação.</p>
            <br />
            <br />
            </div>
            </div>
      )
    }
}