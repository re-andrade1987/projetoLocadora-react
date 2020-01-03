import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/index'
import Home from './components/pages/Home/index'
import AboutHeroes from './components/pages/AboutHeroes/index'
import Footer from './components/Footer/index'


const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/AboutHeroes" component={AboutHeroes}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default Routes;