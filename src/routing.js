import React from "react";
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import QuickSearch from './component/quickSearch';
import Home from './component/home';
import Listing from "./component/listing/listing";
// import Home from './component/home';

const Routing = () => {
    return(
        <BrowserRouter>
        
                <Route exact path = "/" component = {Home}/>
                <Route path = "/listing/:id" component = {Listing}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;