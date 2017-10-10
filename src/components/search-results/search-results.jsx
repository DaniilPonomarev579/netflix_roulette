import React from 'react';

import {FilmList} from '../film-list/film-list';
import {Spinner} from '../spinner/spinner';

import '../../common/search-results/search-results.less';

export class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode : props.mode,
            films: props.films,
            // query: props.query,
            // queryInput : '',
            // queryFilter: ''
        };

        // this.getQueryInput = this.getQueryInput.bind(this);
        // this.getQueryFilter = this.getQueryFilter.bind(this);
        // this.search = this.search.bind(this);
        this.sortByReleaseDate = this.sortByReleaseDate.bind(this);
        this.sortByRating = this.sortByRating.bind(this);
        this.getTopPanel = this.getTopPanel.bind(this);
    }

    // search() {
    //     let fillResults = (searchResults) => {
    //         this.setState({results: searchResults});
    //         this.sortByReleaseDate();
    //     };
    //
    //
    //     // let request = `https://www.netflixroulette.net/api/api.php?` +
    //     //     `${this.state.queryFilter.localeCompare('title') === 0 ? 'title' : 'director'}=` +
    //     //     `${this.state.queryInput}`;
    //
    //     // console.log('search-results query');
    //     // console.log(this.state.query);
    //     fetch(this.state.query)
    //         .then(function (response) {
    //             if (response.status !== 200) {
    //                 throw new Error(response.status);
    //             }
    //             else {
    //                 return response.json();
    //             }
    //         })
    //         .then(function (searchResults) {
    //             fillResults(searchResults);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //             fillResults([]);
    //         });
    // }

    sortByReleaseDate() {
        this.setState({
            films: this.state.films.sort((a, b) => {
                return +a.release_year < +b.release_year ? 1 : -1;
            })
        });
    }

    sortByRating() {
        this.setState({
            films: this.state.films.sort((a, b) => {
                return +a.rating < +b.rating ? 1 : -1;
            })
        });
    }

    toggleSmth() {
        this.setState((prevState) => ({
            // results: prevState.results.push({
            //     cover: 'cover3',
            //     title: 'title3',
            //     year: 'year3',
            //     genre: 'genre3'
            // })
        }));
    }

    getTopPanel() {
        switch (this.state.mode) {
            case 'search':
                return this.state.films.length === 0 ?
                       (<div className='search-results__top-panel'></div>) :
                       (<div className='search-results__top-panel'>
                           {this.state.films.length === 1 ?
                            (<span className='search-results__movies-amount'>1 movie found</span>) :
                            (<span className='search-results__movies-amount'>{this.state.films.length}
                                movies found</span>)}
                           <div className='search-results__sort-box'>
                               <span>Sort by</span>
                               <input type='radio'
                                      className='search-results__sort-criterion'
                                      name='sort-criterion'
                                      id='sort-criterion-release-date'
                                      defaultChecked='true'
                                      onClick={this.sortByReleaseDate}
                                      value='release-date'/>
                               <label className='search-results__sort-label' htmlFor='sort-criterion-release-date'>
                                   release date
                               </label>
                               <input type='radio'
                                      className='search-results__sort-criterion'
                                      name='sort-criterion'
                                      id='sort-criterion-rating'
                                      onClick={this.sortByRating}
                                      value='rating'/>
                               <label className='search-results__sort-label' htmlFor='sort-criterion-rating'>
                                   rating
                               </label>
                           </div>
                       </div>);
            case 'film':
                return (
                    <div className='search-results__top-panel'>
                        Films by {this.state.films[0].director}
                    </div>);
            default:
                return <div className='search-results__top-panel'></div>;
        }
    }

    componentDidMount() {
        console.log('search-results componentDidMount');
        this.setState({
            // queryFilter: this.props.query.slice(this.props.query.indexOf('filter=') + 7),
            mode : this.props.mode,
            // queryInput: this.props.query.slice(this.props.query.indexOf('input=') + 6,
            //     this.props.query.indexOf('&filter')),
            films: this.props.films
        }, () => {
            if (this.state.films) {
                this.sortByReleaseDate();
            }
        });
        // setTimeout(() => this.search(), 0);
    }

    // getQueryInput(props) {
    //     this.setState({
    //         queryInput: props.query.slice(props.query.indexOf('input=') + 6,
    //             props.query.indexOf('&filter'))
    //     });
    // }
    //
    // getQueryFilter(props) {
    //     this.setState({queryFilter: props.query.slice(props.query.indexOf('filter=') + 7)});
    // }

    componentWillReceiveProps(nextProps) {
        // this.getQueryInput(nextProps);
        // this.getQueryFilter(nextProps);
        this.setState({
            // queryFilter: nextProps.query.slice(nextProps.query.indexOf('filter=') + 7),
            mode : nextProps.mode,
            // queryInput: nextProps.query.slice(nextProps.query.indexOf('input=') + 6,
            //     nextProps.query.indexOf('&filter')),
            films: nextProps.films
        }, () => {
            if (this.state.films) {
                this.sortByReleaseDate();
            }
        });
        // setTimeout(() => this.search(), 0);
    }

    render() {
        if (!this.state.films) {
            return (
                <div className={this.state.mode.localeCompare('search') === 0 ?
                                'search-results' :
                                'search-results search-results--film'}>
                    <div className='search-results__top-panel'></div>
                    <Spinner/>
                </div>
            );
        }

        if (!Array.isArray(this.props.films)) {
            this.state.films = [this.props.films];
        }

        return (
            <div className={this.state.mode.localeCompare('film') === 0 ?
                            'search-results search-results--film' :
                            'search-results'}>
                {this.getTopPanel()}
                {/*{this.state.films.length === 0 ?*/}
                {/*(<div className='search-results__top-panel'></div>) :*/}
                {/*(<div className='search-results__top-panel'>*/}
                {/*{this.state.films.length === 1 ?*/}
                {/*(<span className='search-results__movies-amount'>1 movie found</span>) :*/}
                {/*(<span className='search-results__movies-amount'>{this.state.films.length} movies found</span>)}*/}
                {/*<div className='search-results__sort-box'>*/}
                {/*<span>Sort by</span>*/}
                {/*<input type='radio'*/}
                {/*className='search-results__sort-criterion'*/}
                {/*name='sort-criterion'*/}
                {/*id='sort-criterion-release-date'*/}
                {/*defaultChecked='true'*/}
                {/*onClick={this.sortByReleaseDate}*/}
                {/*value='release-date'/>*/}
                {/*<label className='search-results__sort-label' htmlFor='sort-criterion-release-date'>*/}
                {/*release date*/}
                {/*</label>*/}
                {/*<input type='radio'*/}
                {/*className='search-results__sort-criterion'*/}
                {/*name='sort-criterion'*/}
                {/*id='sort-criterion-rating'*/}
                {/*onClick={this.sortByRating}*/}
                {/*value='rating'/>*/}
                {/*<label className='search-results__sort-label' htmlFor='sort-criterion-rating'>*/}
                {/*rating*/}
                {/*</label>*/}
                {/*</div>*/}
                {/*</div>)}*/}
                <div className="search-results__films-panel">
                    {this.state.films.length === 0 ?
                     (<span className='search-results__no-film-span'>No films found</span>) :
                     (<FilmList films={this.state.films}/>)}
                </div>
            </div>
        );
    };
}