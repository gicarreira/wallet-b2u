import React, { Component } from 'react'
import IconeStop from '../../assets/imgs/erro/IconeStop.svg'
import IconeVoltar2 from '../../assets/imgs/erro/IconeVoltar2.svg'
import IconeShelby from '../../assets/imgs/biz/IconeShelby.svg'
import { Redirect } from "react-router-dom"
import '../../styles/erro/erro.css'

export default class Erro extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="erro">
            <div className='topo-biz'>
            <img src={IconeVoltar2} alt="icone-voltar"/>
            <h1>Erro</h1>
            <img src={IconeShelby} alt="icone-shelby"/>
            </div>
            <br />
            <br />
            <br />
            <div className='imagem-erro'>
            <img src={IconeStop} alt="icone-stop"/>
            </div>
            <br />
            <div className='erro-texto'>
            <h2>Algo deu errado.</h2>
            <br />
            
            <p>Não é possível carregar os</p>
            <p>créditos no celular escolhido.</p>
            <p>Por favor, aguarde alguns</p>
            <p>minutos e tente novamente.</p>
            <br />
            <br />
            </div>
            </div>
      )
    }
}