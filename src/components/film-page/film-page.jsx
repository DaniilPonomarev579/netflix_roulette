import React from 'react';
import {FilmHeader} from '../header/film-header';
import {SearchResults} from '../search-results/search-results';
import {Footer} from '../footer/footer';

export class FilmPage extends React.Component {
    constructor(props) {
        super(props);

        let film = null;
        
        window.currentFilms.forEach((currentFilm) => {
            if (currentFilm.show_title = props.match.params.film) {
                film = currentFilm;
                this.state = {
                    film: film
                };
            }
        });
    }

    render() {
        return (
            <div>
                <FilmHeader film={this.state.film} props={this.props}/>
                <SearchResults/>
            </div>
        );
    }
}