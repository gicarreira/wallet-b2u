import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import IconeBlocks from '../../assets/imgs/blocksbiz/IconeBlocks.svg'
import IconeVertical from '../../assets/imgs/blocksbiz/IconeVertical.svg'
import IconeHome from '../../assets/imgs/blocksbiz/IconeHome.svg'
import '../../styles/blocksbiz/blocksbiz.css'


export default class BlocksBiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
  
        }
    }

    render() {

        return (
            <div className="blocks-biz">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='imagem-blocksbiz'>
            <div className='icone-biz'>
            <img src={IconeBlocks} alt="icone-blocks"/>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <div className='linha-vertical'>
            <img src={IconeVertical} alt="icone-vertical"/>
            </div>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <div className='icone-blocks'>
            <img src={IconeHome} alt="icone-home"/>
            </div>
            </div>
            <br />
            <br />
            <br />
            <div className='buttons-home'>
            <br />
            <button className="abrir-conta" onClick={ () => { this.setState ({redirect: true})}}>ABRA SUA CONTA</button>
            { this.state.redirect ? <Redirect to='/' /> : null }
            <button className="tenho-conta" onClick={ () => { this.setState ({redirect: true})}}>JÁ TENHO UMA CONTA</button>
            { this.state.redirect ? <Redirect to='/' /> : null }
            </div>
            </div>
        )
    }
}