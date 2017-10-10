import React from 'react';

import {Header} from '../header/header';
import {SearchResults} from '../search-results/search-results';

export class Content extends React.Component {
    constructor(props) {
        // console.log('constructorContent');
        super(props);

        this.state = {
            mode : this.defineMode(props),
            film : props.location.pathname.indexOf('film') !== -1 ? this.searchFilm(props) : null,
            films: null
        };

        this.defineMode = this.defineMode.bind(this);
        this.searchFilm = this.searchFilm.bind(this);
        this.searchFilms = this.searchFilms.bind(this);
    }

    defineMode(props) {
        return props.location.pathname.indexOf('film') !== -1 ? 'film' : 'search';
    }

    searchFilm(props) {
        // console.log('searchFilm');

        if (!props.match.params.film) {
            this.searchFilms(props);
            return;
        }

        let fillResults = (foundFilm) => {
            // console.log('fillResults searchFilm\nfilm from state and found film:');
            // console.log(this.state.film);
            // console.log(foundFilm);
            if (!this.state.film && !foundFilm.show_title) {
                return;
            }

            this.setState({film: foundFilm});
            // this.searchFilms(props);
            setTimeout(() => {
                this.setState({film: foundFilm});
                this.searchFilms(this.props)
            }, 1000);
        };

        fetch(`https://www.netflixroulette.net/api/api.php?title=${props.match.params.film}`)
            .then(function (response) {
                // console.log(response);
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                else {
                    return response.json();
                }
            })
            .then(function (searchResults) {
                fillResults(searchResults);
            })
            .catch((e) => {
                console.log(e);
                fillResults({show_title: null})
            });
    }

    searchFilms(props) {
        // console.log('searchFilms');

        let fillResults = (foundFilms) => {
            // console.log('fillResults searchFilms');
            if (this.state.films && this.state.films.length === 0 && foundFilms.length === 0) {
                return;
            }
            if (!foundFilms) {
                // this.setState({films: []});
                setTimeout(() => this.setState({films: []}), 1500);
            } else {
                // this.setState({films: foundFilms})
                setTimeout(() => this.setState({films: foundFilms}), 1500);
            }
            // this.setState({films: foundFilms})
        };

        let mode = this.defineMode(props);
        let parseQuery = mode.localeCompare('search') === 0 ?
                         (() => {
                             let query = props.match.params.query;

                             if (!query) {
                                 // fillResults([]);
                                 return 'https://www.netflixroulette.net/api/api.php?director=';
                             }
                             // console.log(props.match.params.query);

                             return `https://www.netflixroulette.net/api/api.php?` +
                                 `${query.indexOf('title') > -1 ? 'title' : 'director'}=` +
                                 `${query.slice(query.indexOf('input=') + 6, query.indexOf('&filter'))}`;
                         }) :
                         (() => {
                             return `https://www.netflixroulette.net/api/api.php?director=` +
                                 `${this.state.film.director}`;
                         });

        fetch(parseQuery())
            .then(function (response) {
                // console.log('response:');
                // console.log(response);
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                else {
                    return response.json();
                }
            })
            .then(function (foundFilms) {
                fillResults(foundFilms);
            })
            .catch((e) => {
                console.log(e);
                fillResults([]);
            });
    }

    componentDidMount() {
        // console.log('Content componentDidMount');
        if (this.state.mode.localeCompare('search') === 0) {
            // this.setState({
            //     films: this.searchFilms(this.props),
            //     // film : this.searchFilm(this.props)
            // });
            this.searchFilms(this.props);
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(
        //     'componentWillReceiveProps componentWillReceiveProps componentWillReceiveProps componentWillReceiveProps componentWillReceiveProps');

        this.setState({
            films: null
        });

        this.setState({
            mode: this.defineMode(nextProps),
            film: this.searchFilm(nextProps),
            // films: this.searchFilms(nextProps),
        });
        // this.searchFilm(nextProps);
    }

    render() {
        // console.log('RENDER CONTENT RENDER CONTENT RENDER CONTENT RENDER CONTENT RENDER CONTENT\nfilms:');
        // console.log(this.state.films);
        return (
            <div>
                <Header mode={this.state.mode} film={this.state.film} props={this.props}/>
                <SearchResults mode={this.state.mode} films={this.state.films}/>
            </div>
        );
    }
}