import React from 'react';
import {Link} from 'react-router-dom';

import '../../common/film/film.less';

export class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: props.film
        };
    }

    getRating() {
        let className = 'film__rating ';

        if (+this.state.film.rating <= 1) {
            className += 'film__rating--1';
        } else if (+this.state.film.rating <= 2) {
            className += 'film__rating--2';
        } else if (+this.state.film.rating <= 3) {
            className += 'film__rating--3';
        } else if (+this.state.film.rating <= 4) {
            className += 'film__rating--4';
        } else if (+this.state.film.rating <= 5) {
            className += 'film__rating--5';
        }

        return (<span className={className}>{this.state.film.rating}</span>);
    }

    render() {
        return (
            <div>
                {this.state.film ?
                 (this.state.film.show_title ?
                  (<div>
                      <img src={this.state.film.poster} alt='film-poster' className='film__poster film__poster--large'/>
                      <div className="film__info-wrapper">
                          <span className='film__title film__title--large'>{this.state.film.show_title}</span>
                          {this.getRating()}
                          <br/>
                          <span className='film__category film__category--large'>{this.state.film.category}</span>
                          <span className='film__release-year film__release-year--large'>{this.state.film.release_year}</span>
                          <span className='film__runtime'>{this.state.film.runtime}</span>
                          <br/>
                          <span className='film__summary'>{this.state.film.summary}</span>
                          <span className='film__director'>{this.state.film.director}</span>
                          <span className='film__cast'>{this.state.film.show_cast}</span>
                      </div>
                  </div>) :
                  (<span style={{fontSize: '5rem', color: '#fff', display: 'block', textAlign: 'center'}}>
                      No film found
                  </span>)) :
                 (<span style={{fontSize: '5rem', color: '#fff', display: 'block', textAlign: 'center'}}>Unexpected error</span>)}
            </div>
        );
    }
}