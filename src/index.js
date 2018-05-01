import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import SegundaPagina from './container/SegundaPagina';
import TerceiraPagina from './container/TerceiraPagina';
import PrimeiraPagina from './container/PrimeiraPagina';
import Home from './container/Home';

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path = '/' component={App}>
            <IndexRoute component={Home}/>
            <Route path = '/primeirapagina' component={PrimeiraPagina} />
            <Route path = '/segundapagina' component={SegundaPagina} />
            <Route path = '/terceirapagina' component={TerceiraPagina} />
        </Route>
        

    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();
