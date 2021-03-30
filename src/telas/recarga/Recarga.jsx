import React, { Component } from 'react'
import IconeVivo from '../../assets/imgs/recarga/IconeVivo.svg'
import IconeCelular2 from '../../assets/imgs/recarga/IconeCelular2.svg'
import IconeVoltar2 from '../../assets/imgs/erro/IconeVoltar2.svg'
import IconeShelby from '../../assets/imgs/biz/IconeShelby.svg'
import { Redirect } from "react-router-dom"
import '../../styles/recarga/recarga.css'

export default class Recarga extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="recarga">
            <div className='topo-biz'>
            <img src={IconeVoltar2} alt="icone-voltar"/>
            <h1>Recarga de Celular</h1>
            <img src={IconeShelby} alt="icone-shelby"/>
            </div>
            <br />
            <br />
            <div className='imagem-recarga'>
            <img src={IconeCelular2} alt="icone-stop"/>
            </div>
            <br />
            <div className='recarga-texto'>
            <h2>Você está carregando:</h2>
            <h3>R$ 150,00</h3>
            <br/>
            <p>11 9 9876 5432</p>
            <div className='icone-vivo'>
            <img src={IconeVivo} alt="icone-vivo"/></div>
            <br />
            <br />
            <p2>Confira os dados antes de</p2>
            <p2>efetuar a recarga.</p2>
            <br />
            <br />
            <div className='botao-biz'>
            <button className="botao-acessar" onClick={ () => { this.setState ({redirect: true})}}>CONFIRMAR</button>
            { this.state.redirect ? <Redirect to='/selfie' /> : null }
            </div>
            </div>
            </div>
      )
    }
}