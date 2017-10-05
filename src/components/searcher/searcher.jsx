import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import './search-panel.less';
import '../../common/button/button.less';
import '../../common/radiobutton/radiobutton.less';

class SearcherWithRouter extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this);
        this.search = this.search.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    search(e) {
        e.preventDefault();
        this.props.history.push(
            `/search/Search%20input=${document.forms.searchForm.elements['search-panel__input'].value}&` +
            `filter=${document.forms.searchForm.elements['search-panel__filter-input'].value}`);
    }

    changeFilter(){
        this.props.history.push(
            `/search/Search%20input=${document.forms.searchForm.elements['search-panel__input'].value}&` +
            `filter=${document.forms.searchForm.elements['search-panel__filter-input'].value}`);
    }

    render() {
        return (
            <form id="searchForm" className={'search-panel ' + this.props.classElement} onSubmit={this.search}>
                <h2 className='search-panel__title'>find your movie</h2>
                <div className="search-panel__input-wrapper">
                    <input type='text' className='search-panel__input' name='search-panel__input' autoFocus='true'/>
                    <button type='submit' className='search-panel__input-button'>⤶</button>
                </div>
                <span className='search-panel__filter-title'>search by</span>
                <input type='radio'
                       className='search-panel__filter-input radiobutton'
                       name='search-panel__filter-input'
                       id='filter-title'
                       defaultChecked='true'
                       onClick={this.changeFilter}
                       value='title'/>
                <label className='search-panel__filter-label' htmlFor='filter-title'>
                    title
                </label>
                <input type='radio'
                       className='search-panel__filter-input radiobutton'
                       name='search-panel__filter-input'
                       id='filter-director'
                       onClick={this.changeFilter}
                       value='director'/>
                <label className='search-panel__filter-label' htmlFor="filter-director">
                    director
                </label>

                <button type='submit' className='search-panel__search-button button'>search</button>
            </form>
        );
    }
}

export const Searcher = withRouter(SearcherWithRouter);

// import React, { Component } from 'react';
// import { withRouter } from 'react-router';
//
// export class Searcher extends Component {
//     componentDidMount() {
//         setTimeout(() => {
//             this.props.history.push('my-url')
//         }, 5000);
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//             <div>Searcher</div>
//         );
//     }
// }
//
// export default withRouter(Searcher);

// import React from 'react';
// import {withRouter} from 'react-router';
//
// class SearcherWithRouter extends React.Component {
//     componentDidMount() {
//         setTimeout(() => {
//             this.props.history.push('my-url')
//         }, 5000);
//     }
//
//     render() {
//         console.log(this.props);
//         return (
//             <div>Searcher</div>
//         );
//     }
// }
//
// export const Searcher = withRouter(SearcherWithRouter);

