// import React from 'react';
// import PropTypes from 'prop-types';
// import {withRouter} from 'react-router';
//
// import './search-panel.less';
// import '../../common/button/button.less';
// import '../../common/radiobutton/radiobutton.less';
//
// export class Searcher extends React.Component {
//     static propTypes = {
//         match: PropTypes.object.isRequired,
//         location: PropTypes.object.isRequired,
//         history: PropTypes.object.isRequired
//     }
//
//     constructor(props) {
//         super(props);
//         // console.log(this);
//     }
//
//     search(e) {
//         e.preventDefault();
//         console.log(`/search/Search%20input=${document.forms.searchForm.elements['search-panel__input'].value}&` +
//             `filter=${document.forms.searchForm.elements['search-panel__filter-input'].value}`);
//     }
//
//     render() {
//         return (
//             <form id="searchForm" className={'search-panel ' + this.props.classElement} onSubmit={this.search}>
//                 <h2 className='search-panel__title'>find your movie</h2>
//                 <div className="search-panel__input-wrapper">
//                     <input type='text' className='search-panel__input' name='search-panel__input' autoFocus='true'/>
//                     <button type='submit' className='search-panel__input-button'>⤶</button>
//                 </div>
//                 <span className='search-panel__filter-title'>search by</span>
//                 <input type='radio'
//                        className='search-panel__filter-input radiobutton'
//                        name='search-panel__filter-input'
//                        id='filter-title'
//                        defaultChecked='true'
//                        value='title'/>
//                 <label className='search-panel__filter-label' htmlFor='filter-title'>
//                     title
//                 </label>
//                 <input type='radio'
//                        className='search-panel__filter-input radiobutton'
//                        name='search-panel__filter-input'
//                        id='filter-director'
//                        value='director'/>
//                 <label className='search-panel__filter-label' htmlFor="filter-director">
//                     director
//                 </label>
//
//                 <button type='submit' className='search-panel__search-button button'>search</button>
//             </form>
//         );
//     }
// }

import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

// A simple component that shows the pathname of the current location
class SearcherWithoutRouter extends React.Component {
    static propTypes = {
        match   : PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history : PropTypes.object.isRequired
    };

    render() {
        const {match, location, history} = this.props;

        return (
            <div>You are now at {location.pathname}</div>
        )
    }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const Searcher = withRouter(SearcherWithoutRouter);
// This gets around shouldComponentUpdate
// withRouter(connect(...)(MyComponent))

// This does not
// connect(...)(withRouter(MyComponent))