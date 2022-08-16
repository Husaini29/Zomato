import React from 'react';
// import Search from './searchComponent';
import QuickSearch from './quickSearch';
import Header from './header';

const Home = (props) => {
    console.log(">>>home>>>",props)
    return(
        <>
            <Header/>
            <QuickSearch/>
        </>
    )
}

export default Home;