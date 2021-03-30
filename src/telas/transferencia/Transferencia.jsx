import React, { Component } from 'react'
import IconeSetas from '../../assets/imgs/transferencia/IconeSetas.svg'
import IconeBB from '../../assets/imgs/transferencia/IconeBB.svg'
import IconeItau from '../../assets/imgs/transferencia/IconeItau.svg'
import IconeBradesco from '../../assets/imgs/transferencia/IconeBradesco.svg'
import IconeCaixa from '../../assets/imgs/transferencia/IconeCaixa.svg'
import IconeSantander from '../../assets/imgs/transferencia/IconeSantander.svg'
import IconeVoltar from '../../assets/imgs/biz/IconeVoltar.svg'
import IconeShelby from '../../assets/imgs/biz/IconeShelby.svg'
import { Redirect } from "react-router-dom"
import '../../styles/transferencia/transferencia.css'

export default class Transferencia extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <div className="transferencia">
            <div className='topo-biz'>
            <img src={IconeVoltar} alt="icone-voltar"/>
            <h1>Transferência Instantânea</h1>
            <img src={IconeShelby} alt="icone-shelby"/>
            </div>
            <br />
            <br />
            <br />
            <div className='imagem-transferencia'>
            <img src={IconeSetas} alt="icone-setas"/>
            </div>
            <br />
            <div className='transferencia-texto'>
            <h2>Qual o Banco de origem?</h2>
            <br />
            <p>Você deve ser o titular da</p>
            <p>conta neste banco.</p>
            <br />
            <div className='bancos'>
            <div className='linha1'>
            <div className='bb'>
            <img src={IconeBB} alt="icone-bb"/>
            <p2>Banco do Brasil</p2>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='itau'>
            <img src={IconeItau} alt="icone-itau"/>
            <p2>Itaú</p2>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className='bradesco'>
            <img src={IconeBradesco} alt="icone-bradesco"/>
            <p2>Bradesco</p2>
            </div>
            </div>
            <br/>
            <div className='linha2'>
            <div className='caixa'>
            <img src={IconeCaixa} alt="icone-caixa"/>
            <p2>Caixa Econômica</p2>
            </div>
            &nbsp;
            <div className='santander'>
            <img src={IconeSantander} alt="icone-santander"/>
            <p2>Santander</p2>
            </div>
            </div>
            </div>
            </div>
            <br />
            <br />
            <br />
            </div>
      )
    }
}