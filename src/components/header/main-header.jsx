import React from 'react';

import {Searcher} from '../searcher/searcher';

import './header.less';

// const MainHeader = () => (
//     <div className='header'>
//         <span className='header__title'>netflixroulette</span>
//         <Searcher classElement={'hahahaha'}/>
//     </div>
// );
export class MainHeader extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className="header__background"></div>
                <h3 className='header__title'>netflixroulette</h3>
                <Searcher classElement={'header__search-panel'}/>
            </div>
    );
    }
    }
    // export default MainHeader;