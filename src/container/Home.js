import React,{Component} from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

export default class Home extends Component{
    homeCardPrimeiro = {
        title: "Primeiro",
        text: "Primeiro Texto bla bla bla... Primeiro texto bla bla bla...",
        image: "http://lolfunnymeme.com/wp-content/uploads/trollface1.png",
        btnlabel: "PrimeiroBtn",
        action: () => hashHistory.push('/primeirapagina')
    }

    homeCardSegundo = {
        title: "Segundo",
        text: "Segundo Texto bla bla bla... Segundo texto bla bla bla...",
        image: "https://i.ebayimg.com/images/g/tZkAAOSw8lBToq0C/s-l300.jpg",
        btnlabel: "SegundoBtn",
        action: () => hashHistory.push('/segundapagina')
    }

    homeCardTerceiro = {
        title: "Terceiro",
        text: "Terceiro Texto bla bla bla... Terceiro texto bla bla bla...",
        image: "http://pluspng.com/img-png/lol-png-lol-png-image-1175.png",
        btnlabel: "TerceiroBtn",
        action: () => hashHistory.push('/terceirapagina')
    }

    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardPrimeiro.title}
                            text={this.homeCardPrimeiro.text}
                            image={this.homeCardPrimeiro.image}
                            btnlabel={this.homeCardPrimeiro.btnlabel}
                            action={this.homeCardPrimeiro.action} />
                    <HomeCard {...this.homeCardSegundo}/>
                    <HomeCard {...this.homeCardTerceiro}/>
                </div>
            </div>
        );       
    }
}

