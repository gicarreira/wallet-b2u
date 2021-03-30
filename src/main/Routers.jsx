import React from 'react'
import { BrowserRouter as Router, Match, Route, Switch, Redirect } from 'react-router-dom'
import BlocksBiz from '../telas/blocksbiz/BlocksBiz'
import Biz from '../telas/biz/Biz'
import Abertura from '../telas/abertura/Abertura';
import Receba from '../telas/receba/Receba';
import Erro from '../telas/erro/Erro';
import Recarga from '../telas/recarga/Recarga';
import Transferencia from '../telas/transferencia/Transferencia';

// Rotas das páginas 
class Rotas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <Switch>
                <Route exact path='/teste' component={() => <BlocksBiz  />} />
                <Route exact path='/' component={() => <Biz /> } />
                <Route exact path='/1' component={() => <Abertura /> } />
                <Route exact path='/2' component={() => <Receba /> } />
                <Route exact path='/3' component={() => <Erro /> } />
                <Route exact path='/4' component={() => <Recarga /> } />
                <Route exact path='/5' component={() => <Transferencia /> } />
                <Redirect from='*' to='/' />
            </Switch>

        )
    }
}

export { Rotas }