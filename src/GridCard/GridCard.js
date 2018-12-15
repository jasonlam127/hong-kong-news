import React, { Component }  from 'react';
import './GridCard.css';
import { Route } from "react-router-dom";

import Business from '../Business/Business';
import Home from '../Home/Home';
import Entertain from '../Entertain/Entertain';
import International from '../International/International';
import Sport from '../Sport/Sport';
import Technology from '../Technology/Technology';
import Lifestyle from '../Lifestyle/Lifestyle';
import Science from '../Science/Science'

class GridCard extends Component {

    User({ match }) {

        let links =[
            'https://newsapi.org/v2/top-headlines?country=hk&category=business&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&category=entertainment&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&category=health&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&category=science&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&category=sports&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&category=technology&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=tw&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100',
            'https://newsapi.org/v2/top-headlines?country=hk&apiKey=8c41f64fa8a84841a894eabc73d19722&pageSize=100'

        ] ;
        
        if (match.params.id === 'business')
            return <Business link = {links[0]} />;
        else if (match.params.id === 'entertainment')
            return <Entertain link = {links[1]} />;
        else if (match.params.id === 'international')
            return <International link = {links[6]} />;
        else if (match.params.id === 'sport')
            return <Sport link = {links[4]} />;
        else if (match.params.id === 'technology')
            return <Technology link = {links[5]} />;
        else if (match.params.id === 'lifestyle')
            return <Lifestyle link = {links[2]} />;
        else if (match.params.id === 'science')
            return <Science link = {links[3]} />;
        else
            return <Home link = {links[7]}  />;
    }

    render() {
    
        return (
            <div className="pure-g">
                <Route path="/:id" component= {this.User} />
                <Route exact path="//" component= {this.User} />
                
             </div>
        );
    }
} 
export default GridCard;