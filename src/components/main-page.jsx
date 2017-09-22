import React from 'react';
import Film from './film';
import Header from './header/main-header';
import SearchResults from './search-results/search-results';
import Footer from './footer/footer';

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <SearchResults/>
                <Footer/>
            </div>
        );
    }
}