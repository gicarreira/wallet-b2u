import React, { Component } from 'react'
import IconeVisa from '../../assets/imgs/receba/IconeVisa.svg'
import { Redirect } from "react-router-dom"
import '../../styles/receba/receba.css'

export default class Receba extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="receba">
            <br />
            <br />
            <br />
            <div className='imagem-receba'>
            <img src={IconeVisa} alt="icone-visa"/>
            </div>
            <br />
            <div className='receba-texto'>
            <h2>Receba o seu cartão</h2>
            <h2>na sua casa.</h2>
            <br />
            
            <p>Confirme o seu endereço e</p>
            <p>é só aguardar a chegada do</p>
            <p>seu cartão.</p>
            <br />
            <div className='botao-biz'>
            <button className="botao-acessar" onClick={ () => { this.setState ({redirect: true})}}>CONFIRMAR ENDEREÇO</button>
            { this.state.redirect ? <Redirect to='/selfie' /> : null }
            </div>
            </div>
            </div>
      )
    }
}