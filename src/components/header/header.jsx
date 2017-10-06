import React from 'react';
import {Link} from 'react-router-dom';

import {Searcher} from '../searcher/searcher';
import {FilmInfo} from '../film-info/film-info';

import './header.less';
import '../../common/button/button.less';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mode        : props.mode,
            fireRedirect: false,
        };

        this.returnToSearch = this.returnToSearch.bind(this);
    }

    returnToSearch(e) {
        e.preventDefault();
        this.props.props.history.push('/');
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mode: nextProps.mode});
    }

    render() {
        return (
            <div className={this.state.mode.localeCompare('search') === 0 ? 'header' : 'header header--film'}>
                <div className={this.state.mode.localeCompare('search') === 0 ?
                                'header__background' :
                                'header__background header__background--large'}></div>

                <Link to='/' className='header__title'>netflixroulette</Link>

                {this.state.mode.localeCompare('search') === 0 ?
                 (<Searcher classElement={'header__search-panel'}/>) :
                 (<button className='header__search-button button button--white' onClick={this.returnToSearch}>
                     search
                 </button>)}

                {this.state.mode.localeCompare('search') === 0 ?
                 (null) :
                 (<FilmInfo film={this.state.film}/>)}
            </div>
        );
    }
}