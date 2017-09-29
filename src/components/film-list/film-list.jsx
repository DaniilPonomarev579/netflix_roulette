import React from 'react';
import {Link} from 'react-router-dom';

import '../../common/search-results/search-results.less';
import '../../common/film-list/film-list.less';
import '../../common/film/film.less';

export function FilmList(props) {
    return (
        <ul className='search-results__film-list film-list'>
            {props.results.map((film) =>
                <li key={film.show_id} className='film-list__film film'>
                    <Link to={'/film/' + film.show_title} className='film__poster-link'>
                        <img src={film.poster} alt='film-poster' className='film__poster film__poster--small'/>
                    </Link>
                    <span className='film__release-year'>{film.release_year}</span>
                    <Link to={'/film/' + film.show_title} className='film__title-link'>{film.show_title}</Link>
                    <span className='film__category'>{film.category}</span>
                </li>)}
        </ul>
    );
}