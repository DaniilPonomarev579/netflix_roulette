import React from 'react';
import {Link} from 'react-router-dom';

import {FilmInfo} from '../film-info/film-info';

import './header.less';
import '../../common/button/button.less';

export class FilmHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film        : props.film,
            fireRedirect: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.props.history.push('/');
    }

    render() {
        return (
            <div className='header header--film'>
                <div className="header__background header__background--large"></div>
                <button className='header__search-button button button--white' onClick={this.handleSubmit}>
                    search
                </button>
                <Link to='/' className='header__title'>netflixroulette</Link>
                <FilmInfo film={this.state.film}/>
            </div>
        );
    }
}