import React from 'react';

import Searcher from '../searcher/searcher';

// const Header = () => (
//     <div className='header'>
//         <span className='header__title'>netflixroulette</span>
//         <Searcher classElement={'hahahaha'}/>
//     </div>
// );
export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <h3 className='header__title'>netflixroulette</h3>
                <Searcher classElement={'header__search-panel'}/>
            </div>
    );
    }
    }
    // export default Header;