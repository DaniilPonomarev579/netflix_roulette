import React from 'react';

import {FilmList} from '../film-list/film-list';

import '../../common/search-results/search-results.less';

export class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: currentFilms
        };
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

    componentDidMount() {
        // this.results[0].title = 'titleeeee';
    }

    componentWillUnmount() {
        // this.results[0].title = 'title';
    }

    render() {
        // let buttonClass = this.state.liked ? 'active' : '';

        return (
            <div className='search-results'>
                {this.state.results.length === 0 ?
                 (<div className="search-results__top-panel"></div>) :
                 (<div className="search-results__top-panel">
                     <span>{this.state.results.length} movies found</span>
                     <div className="search-results__sort-box">
                         <span>Sort by</span>
                         <input type='radio'
                                className='search-results__sort-criterion'
                                name='sort-criterion'
                                id='sort-criterion-release-date'
                                defaultChecked='true'
                                value='release-date'/>
                         <label className='search-results__sort-label' htmlFor='sort-criterion-release-date'>
                             release date
                         </label>
                         <input type='radio'
                                className='search-results__sort-criterion'
                                name='sort-criterion'
                                id='sort-criterion-rating'
                                value='rating'/>
                         <label className='search-results__sort-label' htmlFor="sort-criterion-rating">
                             rating
                         </label>
                     </div>
                 </div>)}
                <div className="search-results__films-panel">
                    {this.state.results.length === 0 ?
                     (<span className='search-results__no-film-span'>No films found</span>) :
                     (<FilmList results={this.state.results}/>)}
                </div>
            </div>
        );
    };
}