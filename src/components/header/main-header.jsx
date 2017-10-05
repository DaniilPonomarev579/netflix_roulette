import React from 'react';
import {Searcher} from '../searcher/searcher';
import {Link} from 'react-router-dom';

import './header.less';

export class MainHeader extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className="header__background"></div>
                <Link to='/' className='header__title'>netflixroulette</Link>
                <Searcher classElement={'header__search-panel'}/>
            </div>
    );
    }
    }
    // export default MainHeader;