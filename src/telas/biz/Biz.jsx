import React, { Component } from 'react'
import IconeBiz from '../../assets/imgs/biz/IconeBiz.svg'
import IconeB2u from '../../assets/imgs/biz/IconeB2u.svg'
import IconeTraco from '../../assets/imgs/biz/IconeTraco.svg'
import IconeCelular from '../../assets/imgs/biz/IconeCelular.svg'
import IconeCasa from '../../assets/imgs/biz/IconeCasa.svg'
import IconeCartao from '../../assets/imgs/biz/IconeCartao.svg'
import IconeEscudo from '../../assets/imgs/biz/IconeEscudo.svg'
import { Redirect } from "react-router-dom"
import '../../styles/biz/biz.css'


export default class Biz extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
  
        }
    }

    render() {

        return (
            <div className="biz">
            <div className='topo-biz'>
            <div className='imagens-biz'>
            <div className='img-b2u'>
            <br />
            <img src={IconeB2u} alt="icone-b2u" /></div>
            <br/>
            <div className='img-biz'>
            <img src={IconeBiz} alt="icone-celular"/></div></div>
            </div>
            <br />
            <div className='biz-texto'>
            <h2>Chegou a hora de você descobrir</h2>
            <h2>tudo o que a sua carteira digital</h2>
            <h2>pode oferecer.</h2>
            <br />
            </div>
            <div className='divisoria-biz'>
            <img src={IconeTraco} alt="icone-traco" />
            </div>
            <br />
            <div className='icones-biz'>
            <div className='conta-digital'>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='icone-celular'>
            <img src={IconeCelular} alt="icone-celular" />
            </div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='texto-conta'>
            <h2>CONTA DIGITAL</h2>
            <p>Deposite dinheiro na sua carteira</p>
            <p>e realize pagamentos por QR</p>
            <p>Code, transferências e muito mais.</p>
            </div>
            </div>
            <br />
            <div className='onde-usar'>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='icone-casa'>
            <img src={IconeCasa} alt="icone-casa" />
            </div>
            &nbsp;&nbsp; &nbsp;&nbsp; 
            <div className='texto-onde'>
            <h2>ONDE USAR?</h2>
            <p>Pagamentos online, restaurantes</p>
            <p>e lojas que possuem a maquininha</p>
            <p>da Cielo.</p>
            </div>
            </div>
            <br />
            <div className='cartao-virtual'>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='icone-cartao'>
            <img src={IconeCartao} alt="icone-cartao" />
            </div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='texto-cartao'>
            <h2>CARTÃO VIRTUAL DÉBITO</h2>
            <p>Realize todas as suas compras</p>
            <p>pela internet com segurança</p>
            <p>e rapidez.</p>
            </div>
            </div>
            <br />
            <div className='seguranca'>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='icone-seguranca'>
            <img src={IconeEscudo} alt="icone-escudo" />
            </div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div className='texto-seguranca'>
            <h2>SEGURANÇA</h2>
            <p>Quando você habilitar a sua conta,</p>
            <p>não esqueça de desbloquear o seu</p>
            <p>cartão. Bloqueie quando quiser.</p>
            </div>
            </div>
            </div>
            <br/>
            <div className='botao-biz'>
            <button className="botao-acessar" onClick={ () => { this.setState ({redirect: true})}}>ACESSAR MINHA CONTA</button>
            { this.state.redirect ? <Redirect to='/selfie' /> : null }
            </div>
            </div>
      )
    }
}