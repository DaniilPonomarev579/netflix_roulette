import React from 'react';
import {MainHeader} from '../header/main-header';
import {SearchResults} from '../search-results/search-results';

export class MainPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         results: currentFilms
    //     }
    // }

    render() {
        return (
            <div>
                <MainHeader/>
                <SearchResults/>
            </div>
        );
    }
}