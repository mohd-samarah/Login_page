import React from 'react';
import { Switch, Route } from 'react-router';
import Header from '../../Components/Header/Header';
import Explore from '../Explore/Explore';
import NewHome from '../NewHome/NewHome';
const Home = ({handleLogged}) => {
    return (
        <div>
            <Header isLogged={handleLogged}/>
            <Switch>
                <Route exact path='/' component={NewHome}/>
                <Route exact path='/explore' component={Explore}/>
            </Switch>
        </div>
    );
};

export default Home;
