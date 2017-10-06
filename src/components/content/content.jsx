import React from 'react';

import {Header} from '../header/header';
import {SearchResults} from '../search-results/search-results';
import {Spinner} from '../spinner/spinner';

export class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode     : props.location.pathname.indexOf('film') !== -1 ? 'film' : 'search',
            query    : this.parseQuery(props),
            filmQuery: this.parseFilmQuery(props),
            film     : {
                show_id     : '70299043',
                show_title  : 'Attack on Titan',
                release_year: '2013',
                category    : 'Anime',
                poster      : 'http:\\/\\/cdn-2.nflximg.com\\/en_us\\/boxshots\\/ghd\\/70299043.jpg',
                rating      : '4.6',
                show_cast   : 'Yuki Kaji, Yui Ishikawa, Marina Inoue, Daisuke Ono, Hiro Shimono, Hiroshi Kamiya, Keiji Fujiwara, Kish\u00f4 Taniyama, Romi Park, Ryota Ohsaka',
                director    : 'Quentin Tarantino',
                summary     : 'The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill\'s house, she\'s in for a surprise.',
                runtime     : '120 min'
            },
        };

        this.parseQuery = this.parseQuery.bind(this);
        this.parseFilmQuery = this.parseFilmQuery.bind(this);

        // let film = null;
        //
        // window.currentFilms.forEach((currentFilm) => {
        //     if (currentFilm.show_title = props.match.params.film) {
        //         film = currentFilm;
        //         this.state = {
        //             film: film
        //         };
        //     }
        // });
    }

    parseQuery(props) {
        let queryInput = props.location.pathname.slice(props.location.pathname.indexOf('input=') + 6,
            this.props.location.pathname.indexOf('&filter'));
        let queryFilter = props.location.pathname.slice(props.location.pathname.indexOf('filter=') + 7);
        return `https://www.netflixroulette.net/api/api.php?` +
            `${queryFilter.localeCompare('title') === 0 ? 'title' : 'director'}=` +
            `${queryInput}`
    }

    parseFilmQuery(props) {
        let queryInput = props.location.pathname.slice(props.location.pathname.indexOf('input=') + 6,
            this.props.location.pathname.indexOf('&filter'));
        let queryFilter = props.location.pathname.slice(props.location.pathname.indexOf('filter=') + 7);
        return `https://www.netflixroulette.net/api/api.php?` +
            `${queryFilter.localeCompare('title') === 0 ? 'title' : 'director'}=` +
            `${queryInput}`
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            mode : nextProps.location.pathname.indexOf('film') !== -1 ? 'film' : 'search',
            query: this.parseQuery(nextProps)
        });
    }

    render() {
        return (
            <div>
                <Header mode={this.state.mode} film={this.state.film} props={this.props}/>
                <SearchResults mode={this.state.mode} query={this.state.query}/>
                {/*<Spinner/>*/}
            </div>
        );
    }
}